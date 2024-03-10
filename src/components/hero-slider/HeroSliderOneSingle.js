import PropTypes from "prop-types";
import './hero.css'

import { Link } from "react-router-dom";

const HeroSliderOneSingle = ({ data }) => {
  return (
    <div className="single-slider slider-height-1 bg">
      <div className="container">
      
          <div className="col-xl-9 col-lg-10 col-md-8 col-12 col-sm-6">
          <img style={{marginLeft : "40px", marginLeft : "70px", marginBottom : "20px" ,width : "100%"}}
                className="animated img-fluid"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
         
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-single-img slider-animated-1">
             
            </div>
          </div>
        </div>
      </div>
    
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderOneSingle;
