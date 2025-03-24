// import express from "express";
// import { uploadProduct } from "../controller/productController.js";
// // import { upload } from "../config/cloudinaryConfig.js";
// import { upload } from "../config/cloudinaryConfig.js";

// const router = express.Router();

// router.post("/upload", upload.array("images", 4), uploadProduct);

// export default router;



// import express from "express";
// import { uploadProduct } from "../controller/productController.js";
// // import { upload } from "../config/cloudinaryConfig.js";

// const router = express.Router();

// // Accept exactly 4 images (field name: "images")
// // router.post("/upload", upload.array("images", 4), uploadProduct);

// router.post("/upload", uploadProduct);

// export default router;




import express from "express";
import { uploadProduct, getProductsByVendor,getProductsByCategory, getAllProducts,getSingleProduct,searchProducts,getSimilarProducts } from "../controller/productController.js";
import { upload } from "../config/localStorageConfig.js";
// import { upload } from "../config/cloudinaryConfig.js";

const router = express.Router();

// POST route for product upload with exactly 4 images
router.post("/upload", upload.array("images", 4), uploadProduct);

router.get("/vendor/:shopName", getProductsByVendor);
router.get("/products/:category", getProductsByCategory);
router.get("/allproduct", getAllProducts);

router.get("/productdet/:productId", getSingleProduct);
router.get("/search/:query", searchProducts);
router.get("/products/:productId/similar", getSimilarProducts);


export default router;
