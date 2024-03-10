import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={clsx(logoClass)} style={{  marginTop : '-0.2rem' , paddingTop :"1rem"}}>
      <Link to={ "/"}>
        <img alt="" src='/assets/img/brand-logo/auto_meka_logo_small.webp'style={{ width: "4vw", height: "8vh", }}/>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
