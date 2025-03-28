



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     brand: "",
//     vendor: "",
//     stock: "",
//     isFeatured: false,
//     specifications: {},
//   });

//   const [categories, setCategories] = useState([]); // Fetch categories
//   const [colors, setColors] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [images, setImages] = useState([]);

//   // Fetch Categories from Backend
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/category/getall-cat");
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     if (selectedFiles.length !== 4) {
//       alert("Please upload exactly 4 images.");
//       return;
//     }
//     setImages(selectedFiles);
//   };

//   const handleAddColor = () => {
//     setColors([...colors, { color: "", images: [] }]);
//   };

//   const handleColorChange = (index, e) => {
//     const newColors = [...colors];
//     newColors[index].color = e.target.value;
//     setColors(newColors);
//   };

//   const handleSizeChange = (index, field, value) => {
//     const newSizes = [...sizes];
//     newSizes[index] = { ...newSizes[index], [field]: value };
//     setSizes(newSizes);
//   };

//   const handleAddSize = () => {
//     setSizes([...sizes, { size: "", stock: 0, additionalPrice: 0 }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.category) {
//       alert("Please select a category.");
//       return;
//     }

//     if (images.length !== 4) {
//       alert("You must upload exactly 4 images.");
//       return;
//     }

//     const formDataObj = new FormData();
//     Object.keys(formData).forEach((key) => formDataObj.append(key, formData[key]));

//     colors.forEach((colorObj, index) => {
//       formDataObj.append(`color[${index}]`, colorObj.color);
//     });

//     sizes.forEach((sizeObj, index) => {
//       formDataObj.append(`sizes[${index}][size]`, sizeObj.size);
//       formDataObj.append(`sizes[${index}][stock]`, sizeObj.stock);
//       formDataObj.append(`sizes[${index}][additionalPrice]`, sizeObj.additionalPrice);
//     });

//     images.forEach((image) => {
//       formDataObj.append("images", image);
//     });

//     try {
//       const response = await axios.post(
//         BACKENDURL + "/api/v1/product/upload",
//         formDataObj,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       alert("Product uploaded successfully!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Upload failed", error);
//       alert("Failed to upload product");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h2 className="text-2xl font-semibold mb-4">Upload New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Product Fields */}
//         <input type="text" name="name" placeholder="Product Name" className="input-field" onChange={handleInputChange} required />
//         <textarea name="description" placeholder="Description" className="input-field" onChange={handleInputChange} required />
//         <input type="number" name="price" placeholder="Price" className="input-field" onChange={handleInputChange} required />

//         {/* Category Dropdown */}
//         <select name="category" className="input-field" onChange={handleInputChange} required>
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>{cat.name}</option>
//           ))}
//         </select>

//         <input type="text" name="brand" placeholder="Brand" className="input-field" onChange={handleInputChange} />
//         <input type="text" name="vendor" placeholder="Vendor ID" className="input-field" onChange={handleInputChange} required />
//         <input type="number" name="stock" placeholder="Stock Quantity" className="input-field" onChange={handleInputChange} required />

//         {/* Image Upload */}
//         <label className="block text-gray-700">Upload 4 Product Images:</label>
//         <input type="file" multiple accept="image/*" className="border p-2 w-full" onChange={handleImageChange} />

//         {/* Colors Section */}
//         <div>
//           <label className="block text-gray-700">Product Colors:</label>
//           {colors.map((color, index) => (
//             <input key={index} type="text" placeholder="Color Name" className="input-field" onChange={(e) => handleColorChange(index, e)} />
//           ))}
//           <button type="button" className="btn-add" onClick={handleAddColor}>+ Add Color</button>
//         </div>

//         {/* Sizes Section */}
//         <div>
//           <label className="block text-gray-700">Product Sizes:</label>
//           {sizes.map((size, index) => (
//             <div key={index} className="flex gap-2">
//               <input type="text" placeholder="Size" className="input-field" onChange={(e) => handleSizeChange(index, "size", e.target.value)} />
//               <input type="number" placeholder="Stock" className="input-field" onChange={(e) => handleSizeChange(index, "stock", e.target.value)} />
//               <input type="number" placeholder="Additional Price" className="input-field" onChange={(e) => handleSizeChange(index, "additionalPrice", e.target.value)} />
//             </div>
//           ))}
//           <button type="button" className="btn-add" onClick={handleAddSize}>+ Add Size</button>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Upload Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;









// corect 

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../../config/config";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom"; // Used to fetch products for a specific vendor

// const AddProduct = () => {
//   const { vendorDetails } = useSelector((state) => state.user);
//   const initialShopName = vendorDetails?.shopName || "";

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     brand: "",
//     shopName: initialShopName,
//     stock: "",
//     isFeatured: false,
//     specifications: {},
//     variants: [],
//   });

//   const [categories, setCategories] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     if (selectedFiles.length !== 4) {
//       alert("Please upload exactly 4 images.");
//       return;
//     }
//     setImages(selectedFiles);
//   };

//     const handleAddColor = () => {
//     setColors([...colors, { color: "", images: [] }]);
//   };

//   const handleColorChange = (index, e) => {
//     const newColors = [...colors];
//     newColors[index].color = e.target.value;
//     setColors(newColors);
//   };

//   const handleSizeChange = (index, field, value) => {
//     const newSizes = [...sizes];
//     newSizes[index] = { ...newSizes[index], [field]: value };
//     setSizes(newSizes);
//   };

//   const handleAddSize = () => {
//     setSizes([...sizes, { size: "", stock: 0, additionalPrice: 0 }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (images.length !== 4) {
//       alert("You must upload exactly 4 images.");
//       return;
//     }

//     const formDataObj = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (typeof formData[key] === "object" && key !== "shopName") {
//         formDataObj.append(key, JSON.stringify(formData[key]));
//       } else {
//         formDataObj.append(key, formData[key]);
//       }
//     });

//     images.forEach((image) => {
//       formDataObj.append("images", image);
//     });

//     try {
//       const response = await axios.post(
//         `${BACKENDURL}/api/v1/product/upload`,
//         formDataObj,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       alert("Product uploaded successfully!");
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         category: "",
//         brand: "",
//         shopName: initialShopName,
//         stock: "",
//         isFeatured: false,
//         specifications: {},
//         variants: [],
//       });
//       setImages([]);
//     } catch (error) {
//       console.error("Upload failed", error);
//       alert("Failed to upload product");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h2 className="text-2xl font-semibold mb-4">Upload New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" placeholder="Product Name" className="input-field" onChange={handleInputChange} required />
//         <textarea name="description" placeholder="Description" className="input-field" onChange={handleInputChange} required></textarea>
//         <input type="number" name="price" placeholder="Price" className="input-field" onChange={handleInputChange} required />
//         <select name="category" className="input-field" onChange={handleInputChange} required>
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>{cat.name}</option>
//           ))}
//         </select>
//         <input type="text" name="brand" placeholder="Brand" className="input-field" onChange={handleInputChange} />
//         {vendorDetails ? (
//           <input type="text" name="shopName" value={formData.shopName} disabled className="input-field bg-gray-100" />
//         ) : (
//           <input type="text" name="shopName" placeholder="Shop Name" className="input-field" onChange={handleInputChange} required />
//         )}
//         <input type="number" name="stock" placeholder="Stock Quantity" className="input-field" onChange={handleInputChange} required />
//         <label className="block text-gray-700">Upload 4 Product Images:</label>
//         <input type="file" multiple accept="image/*" className="border p-2 w-full" onChange={handleImageChange} />
//         {/* added  */}
//                  <div>
//            <label className="block text-gray-700">Product Colors:</label>
//            {colors.map((color, index) => (
//             <input key={index} type="text" placeholder="Color Name" className="input-field" onChange={(e) => handleColorChange(index, e)} />
//           ))}
//           <button type="button" className="btn-add" onClick={handleAddColor}>+ Add Color</button>
//         </div>

//         {/* Sizes Section */}
//         <div>
//           <label className="block text-gray-700">Product Sizes:</label>
//           {sizes.map((size, index) => (
//             <div key={index} className="flex gap-2">
//               <input type="text" placeholder="Size" className="input-field" onChange={(e) => handleSizeChange(index, "size", e.target.value)} />
//               <input type="number" placeholder="Stock" className="input-field" onChange={(e) => handleSizeChange(index, "stock", e.target.value)} />
//               <input type="number" placeholder="Additional Price" className="input-field" onChange={(e) => handleSizeChange(index, "additionalPrice", e.target.value)} />
//             </div>
//           ))}
//           <button type="button" className="btn-add" onClick={handleAddSize}>+ Add Size</button>
//         </div>

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Upload Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;








import { useState, useEffect } from "react";
import axios from "axios";
import { BACKENDURL } from "../../config/config";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const { vendorDetails } = useSelector((state) => state.user);
  const initialShopName = vendorDetails?.shopName || "";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    shopName: initialShopName,
    stock: "",
    isFeatured: false,
    specifications: {},
    variants: [],
    colors: [],
    sizes: [],
  });

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/category/getall-cat`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length !== 4) {
      alert("Please upload exactly 4 images.");
      return;
    }
    setImages(selectedFiles);
  };

  const handleAddColor = () => {
    setFormData((prevData) => ({
      ...prevData,
      colors: [...prevData.colors, { color: "" }],
    }));
  };

  const handleColorChange = (index, value) => {
    const updatedColors = [...formData.colors];
    updatedColors[index].color = value;
    setFormData((prevData) => ({ ...prevData, colors: updatedColors }));
  };

  const handleAddSize = () => {
    setFormData((prevData) => ({
      ...prevData,
      sizes: [...prevData.sizes, { size: "", stock: 0, additionalPrice: 0 }],
    }));
  };

  const handleSizeChange = (index, field, value) => {
    const updatedSizes = [...formData.sizes];
    updatedSizes[index][field] = value;
    setFormData((prevData) => ({ ...prevData, sizes: updatedSizes }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length !== 4) {
      alert("You must upload exactly 4 images.");
      return;
    }

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      if (typeof formData[key] === "object" && key !== "shopName") {
        formDataObj.append(key, JSON.stringify(formData[key]));
      } else {
        formDataObj.append(key, formData[key]);
      }
    });

    images.forEach((image) => {
      formDataObj.append("images", image);
    });

    try {
      await axios.post(`${BACKENDURL}/api/v1/product/upload`, formDataObj, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product uploaded successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        shopName: initialShopName,
        stock: "",
        isFeatured: false,
        specifications: {},
        variants: [],
        colors: [],
        sizes: [],
      });
      setImages([]);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Failed to upload product");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Upload New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Product Name" className="input-field" onChange={handleInputChange} required />
        <textarea name="description" placeholder="Description" className="input-field" onChange={handleInputChange} required></textarea>
        <input type="number" name="price" placeholder="Price" className="input-field" onChange={handleInputChange} required />
        <select name="category" className="input-field" onChange={handleInputChange} required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
        <input type="text" name="brand" placeholder="Brand" className="input-field" onChange={handleInputChange} />
        {vendorDetails ? (
          <input type="text" name="shopName" value={formData.shopName} disabled className="input-field bg-gray-100" />
        ) : (
          <input type="text" name="shopName" placeholder="Shop Name" className="input-field" onChange={handleInputChange} required />
        )}

        <input type="number" name="stock" placeholder="Stock Quantity" className="input-field" onChange={handleInputChange} required />

        <label className="block text-gray-700">Upload 4 Product Images:</label>
        <input type="file" multiple accept="image/*" className="border p-2 w-full" onChange={handleImageChange} />

        <div>
          <label>Colors:</label>
          {formData.colors.map((color, index) => (
            <input key={index} type="text" placeholder="Color Name" className="input-field" value={color.color} onChange={(e) => handleColorChange(index, e.target.value)} />
          ))}
          <button type="button" className="btn-add" onClick={handleAddColor}>+ Add Color</button>
        </div>

        <div>
          <label className="block text-gray-700">Product Sizes:</label>
          {formData.sizes.map((size, index) => (
            <div key={index} className="flex gap-2">
              <input type="text" placeholder="Size" className="input-field" value={size.size} onChange={(e) => handleSizeChange(index, "size", e.target.value)} />
              <input type="number" placeholder="Stock" className="input-field" value={size.stock} onChange={(e) => handleSizeChange(index, "stock", Number(e.target.value))} />
              <input type="number" placeholder="Additional Price" className="input-field" value={size.additionalPrice} onChange={(e) => handleSizeChange(index, "additionalPrice", Number(e.target.value))} />
            </div>
          ))}
          <button type="button" className="btn-add" onClick={handleAddSize}>+ Add Size</button>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Upload Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
