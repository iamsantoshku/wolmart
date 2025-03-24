

import React, { useState, useEffect } from 'react';
import fetchWishlistProducts from '../helpers/viewwishlist';
import { Link } from 'react-router-dom';
import { BACKENDURL } from '../config/config';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch wishlist items on component mount
    useEffect(() => {
        const loadWishlist = async () => {
            setLoading(true);
            const response = await fetchWishlistProducts();
            if (response.success) {
                console.log(response.data);
                setWishlistItems(response.data); // Assuming response.data contains the wishlist items
            } else {
                setError(response.message);
            }
            setLoading(false);
        };

        loadWishlist();
    }, []);

    // Remove item from wishlist
    const removeFromWishlist = async (id) => {
        try {
            const response = await fetch(BACKENDURL + "/api/v1/wishlist/remove", {
                method: "DELETE",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ productId: id }),
            });

            const data = await response.json();
            if (data.success) {
                setWishlistItems(wishlistItems.filter(item => item.id !== id));
            }
        } catch (error) {
            console.error("Error removing item:", error);
        }
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
                                {wishlistItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="product-thumbnail">
                                            <div className="p-relative">
                                                <a href={`/product/${item.id}`}>
                                                    <figure>
                                                        {/* <img src={item.image} alt={item.name} width="300" height="338" /> */}
                                                        <img 
    src={item.image ? `${BACKENDURL}/uploads/product/${item.image.split('\\').pop()}` : 'fallback-image-url.jpg'} 
    alt={item.name} 
    width="300" 
    height="338" 
/>

                                                    </figure>
                                                </a>
                                                <button type="button" className="btn btn-close" onClick={() => removeFromWishlist(item.id)}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="product-name">
                                            <a href="#">{item.name}</a>
                                        </td>
                                        <td className="product-price">
                                            <ins className="new-price">{item.price}</ins>
                                        </td>
                                        <td className="product-stock-status">
                                            <span className="wishlist-in-stock">{item.stock}</span>
                                        </td>
                                        <td className="wishlist-action">
                                            <div className="d-lg-flex">
                                                {/* <a href=`/product${id}` className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">Quick View</a> */}
                                                <Link to={`/product/${item.id}`} className="btn btn-quickview btn-outline btn-default btn-rounded btn-sm mb-2 mb-lg-0">Quick View</Link>
                                                <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to Cart</a>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
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



