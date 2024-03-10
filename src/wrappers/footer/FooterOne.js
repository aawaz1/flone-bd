import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterNewsletter from "../../components/footer/FooterNewsletter";


const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  return (
    <footer style={{ background: "black" }} className={clsx("footer-area", backgroundColorClass, spaceTopClass, spaceBottomClass, extraFooterClass, spaceLeftClass, spaceRightClass)}>
      <div className={`${containerClass ? containerClass : "container"}`}>
        <div className="row justify-content-center" style={{ direction: 'ltr' }}>
          <div 
            className={`${sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"
              }`}
          >
            <div 
              className={`${sideMenu
                ? "footer-widget mb-30 ml-145"
                : "footer-widget mb-30 ml-75"
                }`}
            >
               <p  style={{color : "white"}}>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://hasthemes.com"
          rel="noopener noreferrer"
          target="_blank"
          style={{color : "white"}} >
          Auto Meka
        </a>
        .<br /> All Rights Reserved
      </p>
              {/* <div className="footer-title">
                <h3 style={{ color: "white" }}>FOLLOW US</h3>
              </div> */}
              {/* <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}  >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>


          </div>

          <div
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
              }`}

          >
            <div
              className={`${sideMenu
                ? "footer-widget mb-30 ml-95"
                : "footer-widget mb-30 ml-50"
                }`}
            >
              <div className="footer-title" >
                <h3 style={{ color: "white" }} >USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>

                  <li >
                    <Link style={{ color: "white" }} to={process.env.PUBLIC_URL + "#/"}>
                      Support Policy
                    </Link>
                  </li>

                  <li>
                    <Link style={{ color: "white" }} to={process.env.PUBLIC_URL + "#/"}>FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`${sideMenu ? "col-xl-3 col-sm-4" : "col-lg-2 col-sm-6"
              }`}
          >
            <div
              className={`${sideMenu
                ? "footer-widget mb-30 ml-145"
                : "footer-widget mb-30 ml-75"
                }`}
            >
             <div className="footer-title">
                <h3 style={{ color: "white" }}>FOLLOW US</h3>
              </div>
               <div className="footer-list">
                <ul>
                  <li>
                    <a
                      href="//www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="//www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}  >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div> 
              <div className="footer-title">
                <h3></h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"} style={{ color: "white" }}>About us</Link>
                  </li>



                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "-4vh" ,marginLeft : "4vw"}}
            className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
              }`}
          >
            <FooterCopyright
              footerLogo="/assests/img/brand"
              spaceBottomClass="mb-30"
            />
            {/* <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                  </li>
                  
                 
                 
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="text-center mt-4">
          <h4 style={{ color: "white", }}>Designed and Developed By AN International</h4>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
