import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { IMAGE_URL } from '../../constants'


const Brands = () => {
    const [brands, setBrands] = useState([])
    
    useEffect(() => {
        const getAllBrands = async () => {
            try {
                const { data } = await axios.get(
                    `https://restapi.ansoftt.com:4321/v1/brand/`
                );
                setBrands(data?.data);
               
            } catch (error) {
                console.error("Error fetching brands:", error);
            }
        }
        getAllBrands();
    }, []);

    return (
     
        <div className="container" style={{marginBottom : "4vh"}}>
             {/* <SectionTitleTwo
          titleText="Our Brands"
          positionClass="text-center"
          spaceClass="mb-50"
          borderClass="no-border"
        />  */}
        <div></div>
            <Marquee style={{gap : '7vw' , cursor : "pointer"}} pauseOnHover={true}>
                {brands.map((brand) => (
                    <div style={{ marginLeft : "6vw"}} key={brand._id}>
                        {/* <h4>{brand?.name}</h4> */}
                        <img style={{ width: "8vw" , height :"16vh" }} src={ IMAGE_URL + brand?.image} alt='' />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Brands;