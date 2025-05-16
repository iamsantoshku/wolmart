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
import { uploadProduct, getProductsByVendor,getProductsByCategory, getAllProducts,getSingleProduct,searchProducts,getSimilarProducts ,getClothingAndFashionProducts,addReviewToProduct, getProductReviews} from "../controller/productController.js";
import { upload } from "../config/localStorageConfig.js";
// import { upload } from "../config/cloudinaryConfig.js";
import { authToken } from "../middleware/authToken.js";

const router = express.Router();

// POST route for product upload with exactly 4 images
// router.post("/upload", upload.array("images", 4), uploadProduct);

router.post(
    "/upload",
    upload.fields([
      { name: "images", maxCount: 4 },
      { name: "colorImages", maxCount: 10 }, // adjust this number as needed
    ]),
    uploadProduct
  );

// router.post(
//   "/upload",
//   upload.fields([
//     { name: "images", maxCount: 4 },
//     { name: "colorImages", maxCount: 10 }, // Adjust the count as needed
//   ]),
//   (req, res) => {
//     try {
//       // Handling general images
//       const images = req.files.images ? req.files.images.map(file => file.publicUrl) : [];

//       // Handling color images
//       const colorImages = req.files.colorImages
//         ? req.files.colorImages.map(file => file.publicUrl)
//         : [];

//       // Send response with URLs
//       res.status(200).json({
//         success: true,
//         images,
//         colorImages,
//       });
//     } catch (error) {
//       res.status(500).json({ success: false, message: "Image upload failed", error });
//     }
//   }
// );

router.get("/vendor/:shopName", getProductsByVendor);
router.get("/products/:category", getProductsByCategory);
router.get("/allproduct", getAllProducts);

// router.get("/productdet/:productId", getSingleProduct);
router.get('/productdet/:name', getSingleProduct)

router.get("/search/:query", searchProducts);
// router.get("/products/:productId/similar", getSimilarProducts);
router.get("/products/:productName/similar", getSimilarProducts);
// router.get("/clothing-fashion", getClothingAndFashionProducts);
router.get("/clothing-fashion", getClothingAndFashionProducts);
// router.post("/productrv/:productName/review",authToken, addReviewToProduct);
// Updated Route (Make sure this is correct)
router.post("/productrv/:productName/review", authToken, addReviewToProduct);


// GET all reviews for a product
router.get("/productrv/:productId/reviews", getProductReviews);




export default router;
