{/* <div className="dropdown">
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
            
          </div> */}




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
          <a href="blog" className="d-lg-show">
            Blog
          </a>
          <a href="contact-us" className="d-lg-show">
            Contact Us
          </a>

          {currentUser ? (
            <a href="/my-account" className="">
              My Account
            </a>
          ) : (
            <>
              <a href="/login" className=" login sign-in">
                <i className="w-icon-account"></i>Sign In
              </a>
              <span className="delimiter d-lg-show">/</span>
              <a href="/signup" className="ml-0 login register">
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




// import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
// import Context from '../../context/index';

// const Headtop = () => {
//   const { user } = useContext(Context) || {}; // context user
//   const reduxUser = useSelector((state) => state.user.user); // redux user
//   const currentUser = user || reduxUser; // prefer context user

//   return (
//     <div className="header-top">
//       <div className="container">
//         <div className="header-left">
//           <p className="welcome-msg">
//             Welcome to Wolmart Store! Enjoy your shopping.
//           </p>
//         </div>

//         <div className="header-right">
//           {/* Currency Dropdown */}
//           <div className="dropdown d-lg-show">
//             <a href="#currency">USD</a>
//             <div className="dropdown-box">
//               <a href="#USD">USD</a>
//               <a href="#EUR">EUR</a>
//             </div>
//           </div>

//           <span className="divider d-lg-show"></span>

//           <a href="blog" className="d-lg-show">
//             Blog
//           </a>

//           <a href="contact-us" className="d-lg-show">
//             Contact Us
//           </a>

//           {/* Show My Account or Login/Register for all devices */}
//           {currentUser ? (
//             <a href="/my-account" className="account-link">
//              Account
//             </a>
//           ) : (
//             <>
//               <a href="/login" className="login sign-in">
//                 <i className="w-icon-account"></i> Sign In
//               </a>
//               <span className="delimiter">/</span>
//               <a href="/signup" className="ml-0 login register">
//                 Register
//               </a>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headtop;
