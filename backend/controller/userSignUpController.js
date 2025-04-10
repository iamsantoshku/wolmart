
import userModel from "../models/userSchema.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import VendorModel from "../models/vendorSchema.js";





export const userSignUpController = async (req, res) => {
    try {
        const { email, password, name, role, shopName, profilePic, shopUrl, phoneNumber } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists.",
                error: true,
                success: false
            });
        }

        // Validate required fields
        if (!email || !password || !name || !role) {
            return res.status(400).json({
                message: "Please provide all required fields.",
                error: true,
                success: false
            });
        }

        // Additional validation for vendors
        if (role === "vendor" && (!shopName || !shopUrl || !phoneNumber)) {
            return res.status(400).json({
                message: "Vendors must provide shopName, shopUrl, and phoneNumber.",
                error: true,
                success: false
            });
        }

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            role: role.toLowerCase(),
            phoneNumber: role === "vendor" ? phoneNumber : null,
            shopName: role === "vendor" ? shopName : null,
            shopUrl: role === "vendor" ? shopUrl : null,
        });

        // Save user in database
        await newUser.save();

        res.status(201).json({
            message: "User registered successfully!",
            success: true,
            error: false
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
};

// User Login
export const usersignin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide both email and password.",
                error: true,
                success: false
            });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                error: true,
                success: false
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Incorrect password.",
                error: true,
                success: false
            });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, process.env.TOKEN_SECRET_KEY, {
            expiresIn: "8h"
        });

        // Cookie options
        const cookieOptions = {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        };

        res.cookie("token", token, cookieOptions).status(200).json({
            message: "Login successful.",
            success: true,
            error: false,
            data: {
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    shopName: user.role === "vendor" ? user.shopName : null,
                    shopUrl: user.role === "vendor" ? user.shopUrl : null
                },
            },
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
};





export const userDetailsController = async (req, res) => {
    try {
        console.log("Fetching user details for userId:", req.userId);

        if (!req.userId) {
            return res.status(400).json({
                message: "Invalid request: No user ID found.",
                error: true,
                success: false
            });
        }

        // Fetch user details
        const user = await userModel.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        let userData = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt
        };

        if (user.role === "vendor") {
            const vendorDetails = await VendorModel.findOne({ userId: user._id });
            userData.vendorDetails = vendorDetails || {};
        }

        if (user.role === "admin") {
            const totalUsers = await userModel.countDocuments();
            const totalVendors = await userModel.countDocuments({ role: "vendor" });
            userData.totalUsers = totalUsers;
            userData.totalVendors = totalVendors;
        }

        res.status(200).json({
            data: userData,
            error: false,
            success: true,
            message: "User details retrieved successfully"
        });

        console.log("User details:", userData);

    } catch (err) {
        console.error("Error fetching user details:", err);
        res.status(500).json({
            message: "Internal Server Error",
            error: true,
            success: false
        });
    }
};

export const getAdminStatsController = async (req, res) => {
    try {
        const totalUsers = await userModel.countDocuments();
        const totalVendors = await userModel.countDocuments({ role: "vendor" });
        res.status(200).json({ success: true, totalUsers, totalVendors });
    } catch (err) {
        console.error("Error fetching admin stats:", err);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};



export const getVendorDetails = async (req, res) => {
  try {
    const { userId } = req.params;

    const vendor = await VendorModel.findOne({ userId }).populate("products");

    if (!vendor) {
      return res.status(404).json({
        message: "Vendor not found",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      data: vendor,
      error: false,
      success: true,
      message: "Vendor details retrieved successfully",
    });
  } catch (err) {
    console.error("Error fetching vendor details:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: true,
      success: false,
    });
  }
};

export const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await userModel.find({}, "-password"); // Exclude passwords for security

        if (!users || users.length === 0) {
            return res.status(404).json({
                message: "No users found.",
                success: false,
                error: true
            });
        }

        res.status(200).json({
            message: "Users fetched successfully.",
            success: true,
            error: false,
            users
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
};

// export const updateUserRole = async (req, res) => {
//     try {
//         const { userId } = req.params; // Get user ID from request params
//         const { newRole } = req.body; // Get new role from request body

//         // Validate input
//         if (!userId || !newRole) {
//             return res.status(400).json({ success: false, message: "User ID and new role are required" });
//         }

//         // Check if the user exists
//         const user = await userModel.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         // Update user role
//         user.role = newRole.toLowerCase(); // Ensure role is stored in lowercase
//         await user.save();

//         return res.status(200).json({ success: true, message: "User role updated successfully", user });
//     } catch (error) {
//         console.error("Error updating user role:", error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };



// import userModel from "../models/userModel.js";

export const updateUserRole = async (req, res) => {
    try {
        const { userId } = req.params; // Get user ID from request params
        const { newRole } = req.body; // Get new role from request body

        // Validate input
        if (!userId || !newRole) {
            return res.status(400).json({ success: false, message: "User ID and new role are required" });
        }

        // Check if the user exists
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Update only the role field, and avoid required validation errors
        user.role = newRole.toLowerCase(); // Ensure role is stored in lowercase

        // Save without validating required fields like phoneNumber
        await user.save({ validateBeforeSave: false });

        return res.status(200).json({ success: true, message: "User role updated successfully", user });
    } catch (error) {
        console.error("Error updating user role:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// export const updateUserRole = async (req, res) => {
//     try {
//         const { userId } = req.params;  // Get user ID from request params
//         const { newRole } = req.body;  // Get new role from request body

//         // Validate input
//         if (!userId || !newRole) {
//             return res.status(400).json({ success: false, message: "User ID and new role are required" });
//         }

//         // Check if the user exists
//         const user = await userModel.findById(userId);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }

//         // Update user role
//         user.role = newRole.toLowerCase();  // Ensure role is stored in lowercase
//         await user.save();

//         return res.status(200).json({ success: true, message: "User role updated successfully", user });
//     } catch (error) {
//         console.error("Error updating user role:", error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };