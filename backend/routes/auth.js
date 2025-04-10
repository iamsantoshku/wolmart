import express from "express";

import { authToken } from "../middleware/authToken.js";
import {
    userSignUpController,
    usersignin,
    userDetailsController,
    getAdminStatsController,
    getVendorDetails,
    getAllUsers,
    updateUserRole,
  
} from "../controller/userSignUpController.js";

const router = express.Router();

router.post("/register", userSignUpController);
router.post("/login", usersignin);
router.get("/user-details",authToken, userDetailsController);
router.get("/vendor/details/:userId",authToken,getVendorDetails);
// router.get("/getVendor/:shopName", getVendorDetails);
router.get("/admin/stats", authToken, getAdminStatsController);
router.get("/admin/users", authToken, getAllUsers);
router.put("/update-role/:userId",authToken, updateUserRole);


export default router;


