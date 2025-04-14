




import Product from "../models/productSchema.js";
import Vendor from "../models/vendorSchema.js";
import Category from "../models/catogrySchema.js"
import mongoose from "mongoose";

// export const uploadProduct = async (req, res) => {
//   try {
    

//     const { shopName, name, description, price, category, brand, stock, isFeatured, specifications, sizes, colors } = req.body;

//     // Parsing JSON Fields (if they are sent as strings)
//     let parsedSpecifications = {};
//     let parsedSizes = [];
//     let parsedColors = [];

//     try {
//       parsedSpecifications = specifications ? JSON.parse(specifications) : {};
//       parsedSizes = sizes ? JSON.parse(sizes) : [];
//       parsedColors = colors ? JSON.parse(colors) : [];
//     } catch (err) {
//       console.warn("Error parsing JSON fields:", err);
//     }

//     // Validate Vendor
//     const vendor = await Vendor.findOne({ shopName });
//     if (!vendor) {
//       return res.status(404).json({ message: "Vendor not found", error: true, success: false });
//     }

//     // Organizing Images by Colors
//     let colorsWithImages = [];
//     if (parsedColors.length > 0 && req.files && req.files.length > 0) {
//       parsedColors.forEach((colorObj) => {
//         const colorImages = req.files
//           .filter((file) => file.originalname.includes(colorObj.color)) // Assuming file names contain color names
//           .map((file) => file.path);

//         colorsWithImages.push({ color: colorObj.color, images: colorImages });
//       });
//     }
//     let imagesField = [];
//     if (req.files && req.files.length > 0) {
//       imagesField.push({ color: "default", urls: req.files.map((file) => file.path) });
//     }

//     // Construct New Product Object
//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       category,
//       brand,
//       stock,
//       isFeatured: isFeatured === "true",
//       specifications: parsedSpecifications,
//       sizes: parsedSizes,
//       images: imagesField,
//       colors: colorsWithImages.length > 0 ? colorsWithImages : [{ color: "default", images: req.files.map((file) => file.path) }],
//       vendor: vendor._id,
//     });

//     // Save Product
//     await newProduct.save();
//     vendor.productsByCategory.push(newProduct._id);
//     await vendor.save();

//     res.status(201).json({ message: "Product added successfully", success: true, data: newProduct });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ message: "Internal Server Error: " + error.message, error: true, success: false });
//   }
// };



export const uploadProduct = async (req, res) => {
  try {
    const { shopName, name, description, price, category, brand, stock, isFeatured, specifications, sizes, colors } = req.body;

    // Parsing JSON Fields (if they are sent as strings)
    let parsedSpecifications = {};
    let parsedSizes = [];
    let parsedColors = [];

    try {
      parsedSpecifications = specifications ? JSON.parse(specifications) : {};
      parsedSizes = sizes ? JSON.parse(sizes) : [];
      parsedColors = colors ? JSON.parse(colors) : [];
    } catch (err) {
      console.warn("Error parsing JSON fields:", err);
    }

    // Validate Vendor
    const vendor = await Vendor.findOne({ shopName });
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found", error: true, success: false });
    }

    // Check if vendor is approved
    if (!vendor.isApproved) {
      return res.status(403).json({ message: "Vendor is not approved to add a product", error: true, success: false });
    }

    // Organizing Images by Colors
    let colorsWithImages = [];
    if (parsedColors.length > 0 && req.files && req.files.length > 0) {
      parsedColors.forEach((colorObj) => {
        const colorImages = req.files
          .filter((file) => file.originalname.includes(colorObj.color)) // Assuming file names contain color names
          .map((file) => file.path);

        colorsWithImages.push({ color: colorObj.color, images: colorImages });
      });
    }
    let imagesField = [];
    if (req.files && req.files.length > 0) {
      imagesField.push({ color: "default", urls: req.files.map((file) => file.path) });
    }

    // Construct New Product Object
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      brand,
      stock,
      isFeatured: isFeatured === "true",
      specifications: parsedSpecifications,
      sizes: parsedSizes,
      images: imagesField,
      colors: colorsWithImages.length > 0 ? colorsWithImages : [{ color: "default", images: req.files.map((file) => file.path) }],
      vendor: vendor._id,
    });

    // Save Product
    await newProduct.save();
    vendor.productsByCategory.push(newProduct._id);
    await vendor.save();

    res.status(201).json({ message: "Product added successfully", success: true, data: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal Server Error: " + error.message, error: true, success: false });
  }
};

export const getProductsByVendor = async (req, res) => {
  try {
    const { shopName } = req.params;
    const decodedShopName = decodeURIComponent(shopName.trim());

    // console.log("Decoded Shop Name:", decodedShopName); // Debugging log

    const vendor = await Vendor.findOne({
      shopName: { $regex: new RegExp(`^${decodedShopName}$`, "i") }
    }).populate("productsByCategory");

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found", error: true, success: false });
    }
    res.status(200).json({ success: true, data: vendor.productsByCategory });
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Internal Server Error", error: true, success: false });
  }
};


export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log("Received Category:", category); // Debugging log

    if (!category) {
      return res.status(400).json({ message: "Category is missing", success: false });
    }

    const decodedCategory = decodeURIComponent(category.trim());

    
    const products = await Product.find({
      category: { $regex: new RegExp(`^${decodedCategory}$`, "i") } // Case-insensitive match
    }).populate("vendor", "shopName");

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found in this category", success: false });
    }

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("vendor", "shopName"); // Fetch all products with vendor names

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found", success: false });
    }

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};





// export const getSingleProduct = async (req, res) => {
//   try {
//     const { productId } = req.params; // Extract product ID from request parameters

//     if (!productId) {
//       return res.status(400).json({ message: "Product ID is required", success: false });
//     }

//     // Populate vendor details, including shopName and any other necessary fields
//     const product = await Product.findById(productId).populate("vendor", "shopName owner email");

//     if (!product) {
//       return res.status(404).json({ message: "Product not found", success: false });
//     }

//     res.status(200).json({ success: true, data: product });
//   } catch (error) {
//     console.error("Backend Error:", error);
//     res.status(500).json({ message: "Internal Server Error", success: false });
//   }
// };



// controller/productController.js
// export const getSingleProduct = async (req, res) => {
//   try {
//     const product = await Product.findOne({ name: req.params.name });

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error fetching product",
//       error,
//     });
//   }
// };

export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ name: req.params.name }).populate("vendor");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product",
      error: error.message,
    });
  }
};


export const searchProducts = async (req, res) => {
  try {
    const { query } = req.params;

    if (!query) {
      return res.status(400).json({ message: "Search query is required", success: false });
    }

    const decodedQuery = decodeURIComponent(query.trim());
    // console.log("Search Query:", decodedQuery);

    const products = await Product.find({
      name: { $regex: new RegExp(decodedQuery, "i") } // Case-insensitive search
    }).populate("vendor", "shopName");

    res.status(200).json({
      success: true,
      products, // Changed `data` to `products` to match frontend expectations
    });

  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};





// export const getSimilarProducts = async (req, res) => {
//   try {
//     const { productId } = req.params; // Extract product ID from request parameters

//     if (!productId) {
//       return res.status(400).json({ message: "Product ID is required", success: false });
//     }

//     // Find the product to get its category
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found", success: false });
//     }

//     // Find other products in the same category, excluding the current product
//     const similarProducts = await Product.find({
//       category: product.category,
//       _id: { $ne: productId }, // Exclude the current product
//     }).limit(5); // Limit results to 5 similar products

//     // console.log("Fetched Similar Products:", similarProducts);

//     res.status(200).json({ success: true, data: similarProducts });
//   } catch (error) {
//     console.error("Error fetching similar products:", error);
//     res.status(500).json({ message: "Internal Server Error", success: false });
//   }
// };


export const getSimilarProducts = async (req, res) => {
  try {
    const { productName } = req.params; // getting productName instead of id

    if (!productName) {
      return res.status(400).json({ message: "Product name is required", success: false });
    }

    // Find the product by name
    const product = await Product.findOne({ name: productName });

    if (!product) {
      return res.status(404).json({ message: "Product not found", success: false });
    }

    // Find other products in the same category excluding the current product
    const similarProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id },  // Exclude current product
    }).limit(5);

    res.status(200).json({ success: true, data: similarProducts });
  } catch (error) {
    console.error("Error fetching similar products:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};




export const getClothingAndFashionProducts = async (req, res) => {
  try {
    const categories = ["clothing", "Fashion"]; // Define the categories to filter

    const products = await Product.find({
      
    category: { $in: categories } // Fetch products where the category is either "Clothing" or "Fashion"
    }).populate("vendor", "shopName");

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found in Clothing and Fashion categories", success: false });
    }

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

