import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const HeroSliderNineSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7 ms-auto">
            <div className="slider-content-2 slider-animated-1">
             
              
              <div className="slider-btn btn-hover">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderNineSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderNineSingle;
