import express from "express";

import { addToWishlistController,getWishlistController } from "../controller/wishlistController.js";
import { authToken } from "../middleware/authToken.js";

const router = express.Router();

router.post("/addtowish",authToken, addToWishlistController);

router.get("/viewwish",authToken, getWishlistController);

export default router;