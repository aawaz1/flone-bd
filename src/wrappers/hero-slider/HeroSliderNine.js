import PropTypes from "prop-types";
import clsx from "clsx";
import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import sliderData from "../../data/hero-sliders/hero-slider-nine.json";
import HeroSliderNineSingle from "../../components/hero-slider/HeroSliderNineSingle.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants.js";
const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false
};

const HeroSliderNine = ({ spaceLeftClass, spaceRightClass }) => {
  const baseUrl = BASE_URL;
  const [advertisements ,setAdvertisements] = useState([]);
  useEffect(() => {
    const getAds = async () => {
      try {
        const {data} = await axios.get( baseUrl + '/advertisements');
        setAdvertisements(data.data)
        console.log(data.data)
        
      } catch (error) {
        
      }
      getAds()
    }
  },[])
  return (
    <div className={clsx("slider-area", spaceLeftClass, spaceRightClass)}>
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params}>
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderNineSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

HeroSliderNine.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default HeroSliderNine;
