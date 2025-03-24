



// import React, { useState } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../config/config";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "customer",
//     phoneNumber: "",
//     shopName: "",
//     shopUrl: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     try {
//       const response = await axios.post(BACKENDURL + "/api/v1/auth/register", formData);
//       setSuccess(response.data.message);
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Name" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
//           <input type="text" name="phoneNumber" placeholder="Phone Number" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
          
//           <select name="role" className="w-full p-2 mb-2 border rounded" onChange={handleChange}>
//             <option value="customer">Customer</option>
//             <option value="vendor">Vendor</option>
//           </select>
          
//           {formData.role === "vendor" && (
//             <>
//               <input type="text" name="shopName" placeholder="Shop Name" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required={formData.role === "vendor"} />
//               <input type="text" name="shopUrl" placeholder="Shop URL" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required={formData.role === "vendor"} />
//             </>
//           )}
          
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../config/config";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    phoneNumber: "",
    shopName: "",
    shopUrl: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(BACKENDURL + "/api/v1/auth/register", formData);
      setSuccess(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="vendor">Vendor</option>
          </select>

          {formData.role === "vendor" && (
            <>
              <input
                type="text"
                name="shopName"
                placeholder="Shop Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={handleChange}
                required={formData.role === "vendor"}
              />
              <input
                type="text"
                name="shopUrl"
                placeholder="Shop URL"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={handleChange}
                required={formData.role === "vendor"}
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
