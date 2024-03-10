import PropTypes from "prop-types";
import clsx from "clsx"

const SectionTitleFour = ({ titleText, spaceBottomClass }) => {
  return (
    <div
      className={clsx("section-title-3", spaceBottomClass)}
    >
      <h2>Best Selling Products</h2>
    </div>
  );
};

SectionTitleFour.propTypes = {
  spaceBottomClass: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleFour;
