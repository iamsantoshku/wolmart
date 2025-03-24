


// import React from 'react';

// const Headtop = () => {
//   return (
//     <div className="header-top">
//       <div className="container">
//         <div className="header-left">
//           <p className="welcome-msg">Welcome to Wolmart Store message or remove it!</p>
//         </div>
//         <div className="header-right">
//           {/* Currency Dropdown */}
//           <div className="dropdown">
//             <a href="#currency">USD</a>
//             <div className="dropdown-box">
//               <a href="#USD">USD</a>
//               <a href="#EUR">EUR</a>
//             </div>
//           </div>

//           {/* Language Dropdown */}
//           <div className="dropdown">
//             <a href="#language">
//               <img
//                 src="assets/images/flags/eng.png"
//                 alt="ENG Flag"
//                 width="14"
//                 height="8"
//                 className="dropdown-image"
//               />{' '}
//               ENG
//             </a>
//             <div className="dropdown-box">
//               <a href="#ENG">
//                 <img
//                   src="assets/images/flags/eng.png"
//                   alt="ENG Flag"
//                   width="14"
//                   height="8"
//                   className="dropdown-image"
//                 />{' '}
//                 ENG
//               </a>
//               <a href="#FRA">
//                 <img
//                   src="assets/images/flags/fra.png"
//                   alt="FRA Flag"
//                   width="14"
//                   height="8"
//                   className="dropdown-image"
//                 />{' '}
//                 FRA
//               </a>
//             </div>
//           </div>

//           <span className="divider d-lg-show"></span>
//           <a href="blog.html" className="d-lg-show">
//             Blog
//           </a>
//           <a href="contact-us.html" className="d-lg-show">
//             Contact Us
//           </a>
//           <a href="my-account" className="d-lg-show">
//             My Account
//           </a>
//           <a href="/login" className="d-lg-show login sign-in">
//             <i className="w-icon-account"></i>Sign In
//           </a>
//           <span className="delimiter d-lg-show">/</span>
//           <a href="/signup" className="ml-0 d-lg-show login register">
//             Register
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headtop;




import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Context from '../../context/index';


const Headtop = () => {
  const { user } = useContext(Context) || {}; // Get user from Context
  const reduxUser = useSelector((state) => state.user.user); // Get user from Redux state
  const currentUser = user || reduxUser; // Prioritize Context over Redux

  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <p className="welcome-msg">Welcome to Wolmart Store! Enjoy your shopping.</p>
        </div>
        <div className="header-right">
          {/* Currency Dropdown */}
          <div className="dropdown">
            <a href="#currency">USD</a>
            <div className="dropdown-box">
              <a href="#USD">USD</a>
              <a href="#EUR">EUR</a>
            </div>
          </div>

          {/* Language Dropdown */}
          <div className="dropdown">
            <a href="#language">
              <img
                src="assets/images/flags/eng.png"
                alt="ENG Flag"
                width="14"
                height="8"
                className="dropdown-image"
              />{' '}
              ENG
            </a>
            <div className="dropdown-box">
              <a href="#ENG">
                <img
                  src="assets/images/flags/eng.png"
                  alt="ENG Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />{' '}
                ENG
              </a>
              <a href="#FRA">
                <img
                  src="assets/images/flags/fra.png"
                  alt="FRA Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />{' '}
                FRA
              </a>
            </div>
          </div>

          <span className="divider d-lg-show"></span>
          <a href="blog.html" className="d-lg-show">
            Blog
          </a>
          <a href="contact-us.html" className="d-lg-show">
            Contact Us
          </a>

          {currentUser ? (
            <a href="/my-account" className="d-lg-show">
              My Account
            </a>
          ) : (
            <>
              <a href="/login" className="d-lg-show login sign-in">
                <i className="w-icon-account"></i>Sign In
              </a>
              <span className="delimiter d-lg-show">/</span>
              <a href="/signup" className="ml-0 d-lg-show login register">
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headtop;


