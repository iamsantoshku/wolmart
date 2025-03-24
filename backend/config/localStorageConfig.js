// import multer from "multer";
// import path from "path";

// // Set up disk storage for local image uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/public/uploads/product/"); // Ensure this folder exists on your server
//   },
//   filename: function (req, file, cb) {
//     // Create a unique filename with timestamp and original extension
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

// const upload = multer({ storage });

// export { upload };


import multer from "multer";
import path from "path";
import fs from "fs";

// Define the upload path
const uploadPath = path.join(process.cwd(), "public", "uploads", "product");

// Ensure the directory exists; if not, create it
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // Use the folder we created
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

export { upload };
