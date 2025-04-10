


// import React, { useState, useEffect } from 'react';
// import fetchWishlistProducts from '../helpers/viewwishlist';
// import { Link } from 'react-router-dom';
// import { BACKENDURL } from '../config/config';
// import removeWishlistProduct from '../helpers/removewishlist';

// const Wishlist = () => {
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadWishlist = async () => {
//             setLoading(true);
//             const response = await fetchWishlistProducts();
//             if (response.success) {
//                 console.log(response.data);
//                 setWishlistItems(response.data);
//             } else {
//                 setError(response.message);
//             }
//             setLoading(false);
//         };

//         loadWishlist();
//     }, []);

//     const handleRemoveFromWishlist = async (productId) => {
//         const response = await removeWishlistProduct(productId);
//         if (response.success) {
//             setWishlistItems(prevItems =>
//                 prevItems.filter(item => {
//                     const id = item.productId?._id || item._id;
//                     return id !== productId;
//                 })
//             );
//         } else {
//             alert(response.message);
//         }
//     };

//     return (
//         <main className="main wishlist-page">
//             <div className="page-header">
//                 <div className="container">
//                     <h1 className="page-title mb-0">Wishlist</h1>
//                 </div>
//             </div>

//             <nav className="breadcrumb-nav mb-10">
//                 <div className="container">
//                     <ul className="breadcrumb">
//                         <li><a href="/">Home</a></li>
//                         <li>Wishlist</li>
//                     </ul>
//                 </div>
//             </nav>

//             <div className="page-content">
//                 <div className="container">
//                     <h3 className="wishlist-title">My Wishlist</h3>

//                     {loading ? (
//                         <p>Loading wishlist...</p>
//                     ) : error ? (
//                         <p className="error-message">{error}</p>
//                     ) : wishlistItems.length === 0 ? (
//                         <p>Your wishlist is empty.</p>
//                     ) : (
//                         <table className="shop-table wishlist-table">
//                             <thead>
//                                 <tr>
//                                     <th className="product-name">Product</th>
//                                     <th></th>
//                                     <th className="product-price">Price</th>
//                                     <th className="product-stock-status">Stock Status</th>
//                                     <th className="wishlist-action">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {wishlistItems.map(item => {
//                                     const product = item.productId || item; // fallback if API returns product directly
//                                     const productId = product._id;
//                                     const productImage = product.image ? `${BACKENDURL}/uploads/product/${product.image.split("\\").pop()}` : "/assets/images/shop/default.jpg";

//                                     return (
//                                         <tr key={productId}>
//                                             <td className="product-thumbnail">
//                                                 <div className="p-relative">
//                                                     <a href={`/product/${product.name}`}>
//                                                         <figure>
//                                                             <img
//                                                                 src={productImage}
//                                                                 alt={product.name}
//                                                                 width="200"
//                                                                 height="200"
//                                                             />
//                                                         </figure>
//                                                     </a>
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-close"
//                                                         onClick={() => handleRemoveFromWishlist(productId)}
//                                                     >
//                                                         <i className="fas fa-times"></i>
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                             <td className="product-name">
//                                                 <a href="#">{product.name}</a>
//                                             </td>
//                                             <td className="product-price">
//                                                 <ins className="new-price">{product.price}</ins>
//                                             </td>
//                                             <td className="product-stock-status">
//                                                 <span className="wishlist-in-stock">{product.stock}</span>
//                                             </td>
//                                             <td className="wishlist-action">
//                                                 <div className="d-lg-flex">
//                                                     <Link
//                                                         to={`/product/${product.name}`}
//                                                         className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
//                                                     >
//                                                         Quick View
//                                                     </Link>
//                                                     <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to Cart</a>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     );
//                                 })}
//                             </tbody>
//                         </table>
//                     )}

//                     <div className="social-links">
//                         <label>Share On:</label>
//                         <div className="social-icons social-no-color border-thin">
//                             <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
//                             <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
//                             <a href="#" className="social-icon social-pinterest w-icon-pinterest"></a>
//                             <a href="#" className="social-icon social-email far fa-envelope"></a>
//                             <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Wishlist;



import React, { useState, useEffect } from 'react';
import fetchWishlistProducts from '../helpers/viewwishlist';
import { Link } from 'react-router-dom';
import { BACKENDURL } from '../config/config';
import removeWishlistProduct from '../helpers/removewishlist';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWishlist = async () => {
            setLoading(true);
            const response = await fetchWishlistProducts();
            if (response.success) {
                setWishlistItems(response.data);
            } else {
                setError(response.message);
            }
            setLoading(false);
        };

        loadWishlist();
    }, []);

    const handleRemoveFromWishlist = async (productId) => {
        const response = await removeWishlistProduct(productId);
        if (response.success) {
            setWishlistItems(prevItems =>
                prevItems.filter(item => {
                    const id = item.productId?._id || item._id;
                    return id !== productId;
                })
            );
        } else {
            alert(response.message);
        }
    };

    // Helper to extract proper image path
    const getProductImage = (product) => {
        try {
            const rawPath = product.images?.[0]?.urls?.[0];
            if (rawPath) {
                const filename = rawPath.split('\\').pop(); // handle Windows-style path
                return `${BACKENDURL}/uploads/product/${filename}`;
            }
        } catch (err) {
            console.error("Image error:", err);
        }
        return "/assets/images/shop/default.jpg"; // fallback image
    };

    return (
        <main className="main wishlist-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title mb-0">Wishlist</h1>
                </div>
            </div>

            <nav className="breadcrumb-nav mb-10">
                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li>Wishlist</li>
                    </ul>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <h3 className="wishlist-title">My Wishlist</h3>

                    {loading ? (
                        <p>Loading wishlist...</p>
                    ) : error ? (
                        <p className="error-message">{error}</p>
                    ) : wishlistItems.length === 0 ? (
                        <p>Your wishlist is empty.</p>
                    ) : (
                        <table className="shop-table wishlist-table">
                            <thead>
                                <tr>
                                    <th className="product-name">Product</th>
                                    <th></th>
                                    <th className="product-price">Price</th>
                                    <th className="product-stock-status">Stock Status</th>
                                    <th className="wishlist-action">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistItems.map(item => {
                                    const product = item.productId || item;
                                    const productId = product._id;
                                    const productImage = getProductImage(product);

                                    return (
                                        <tr key={productId}>
                                            <td className="product-thumbnail">
                                                <div className="p-relative">
                                                    <a href={`/product/${product.name}`}>
                                                        <figure>
                                                            <img
                                                                src={productImage}
                                                                alt={product.name}
                                                                width="200"
                                                                height="200"
                                                            />
                                                        </figure>
                                                    </a>
                                                    <button
                                                        type="button"
                                                        className="btn btn-close"
                                                        onClick={() => handleRemoveFromWishlist(productId)}
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="product-name">
                                                <a href="#">{product.name}</a>
                                            </td>
                                            <td className="product-price">
                                                <ins className="new-price">{product.price}</ins>
                                            </td>
                                            <td className="product-stock-status">
                                                <span className="wishlist-in-stock">{product.stock}</span>
                                            </td>
                                            <td className="wishlist-action">
                                                <div className="d-lg-flex">
                                                    <Link
                                                        to={`/product/${product.name}`}
                                                        className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0"
                                                    >
                                                        Quick View
                                                    </Link>
                                                    <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to Cart</a>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}

                    <div className="social-links">
                        <label>Share On:</label>
                        <div className="social-icons social-no-color border-thin">
                            <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                            <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                            <a href="#" className="social-icon social-pinterest w-icon-pinterest"></a>
                            <a href="#" className="social-icon social-email far fa-envelope"></a>
                            <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Wishlist;
