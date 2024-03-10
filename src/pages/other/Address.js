import React, { useEffect, useState } from 'react'
import { useCreateMutation } from '../../store/slices/address-slice'
import { useDispatch, useSelector } from 'react-redux';
import LayoutOne from '../../layouts/LayoutOne';
import { useSearchParams } from 'react-router-dom';
import { useGetGovernatesQuery } from '../../store/slices/governates-slice';
import axios from 'axios'
import { saveAddress, saveVariant } from '../../store/slices/cart-slice';
import './address.css'
import cogoToast from 'cogo-toast';




const Address = () => {

    const { userInfo } = useSelector(state => state.auth);
    console.log(userInfo.data.user._id)
    const dispatch = useDispatch();
    const [create] = useCreateMutation();
    //  const {governates} = useGetGovernatesQuery();
    const [address_1, setAddress1] = useState('');
    const [name, setName] = useState("")
    const [address_2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [governate, setGovernate] = useState("");
    const [governates, setGovernates] = useState([]);
    const [landmark, setLandmark] = useState('');

    const [postalcode, setPostalcode] = useState('');
    const user_id = userInfo.data.user._id
    console.log(user_id);
    const handleGovernateSelect = (selectedValue) => {
        setGovernate(selectedValue); // Set the selected governate ID in the state
      };
    // const handleGovernateSelect = (selectedGovernate) => {
    //     setGovernate(selectedGovernate);
    // };
    console.log(governate)
    // const handleGovernates = (g) => {
    //     setGoverante(g.value)
    //     console.log(setGoverante)

    // }
    const getAllGovernates = async () => {
        try {
            const { data } = await axios.get(
                `https://restapi.ansoftt.com:4321/v1/governate/`
            );
            setGovernates(data.data);
            console.log(data.data)
            console.log(governates)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllGovernates();
    }, []);

    const placeOrderHandler = async () => {

        try {
            const res = await create({
                address_1: address_1,
                address_2: address_2,
                user_id: user_id,
                landmark,
                postal_code: postalcode,
                city,
                country,
                state,
                governates: governate,
                name,
                phone


            }).unwrap();
          
              cogoToast.success("Address Created Successfully", { position: "bottom-left" });


        } catch (error) {


        }

    }

    const addVariant = (g) => {
        dispatch(saveVariant(g.value))
     
    }
  

    // const handleSaveAddress = async () => {
    //     try {
    //         // Perform any validation if needed

    //         // Call the create mutation with the address data
    //         const response = await create({ user_name });

    //         // Dispatch any action or handle response as needed
    //         console.log(response); // Log the response for debugging

    //         // Example: Dispatch an action to update user information in Redux store
    //         // dispatch(updateUserInfo(response.data));

    //         // Optionally, navigate to another page after successful address creation
    //         // history.push('/dashboard');
    //     } catch (error) {
    //         console.error('Error saving address:', error);
    //         // Handle error, show message to user, etc.
    //     }
    // };

    return (

        <LayoutOne>
            <div>
                <div style={{marginTop : "2vh" , marginLeft : "18vh"}}>
                    <div  className="account-info-wrapper">

                        <h5>Create Address Here</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>Address Line 1</label>
                                <input type="text" value={address_1} onChange={(e) => setAddress1(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="billing-info">
                                <label>City</label>
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>Address 2</label>
                                <input type="text" value={address_2} onChange={(e) => setAddress2(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="billing-info">
                                <label>Phone</label>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="billing-info">
                                <label>Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="billing-info">
                                <label>Country</label>
                                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <div className="billing-info">
                                <label>Postal Code</label>
                                <input type="text" value={postalcode} onChange={(e) => setPostalcode(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                                <label>State</label>
                                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="billing-info">
                                <label>Landmark</label>
                                <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="billing-info ">
                                <label>Governate</label>
                                <select className='billing' value={governate} onChange={(e) => handleGovernateSelect(e.target.value)}>
  <option value="">Select a governate</option>
  {governates.map(g => (
    <option key={g._id} value={g._id}>{g.value} - {g.name}</option>
  ))}
</select>

                                {/* <select className='billing' value={governate.value} onChange={(e) => handleGovernateSelect(e.target.value)}>
                                    <option value="">Select a governate</option>
                                    {governates.map(g => (
                                        <option key={g._id}  value={g.value}>{g.value} - {g.name}</option>
                                    ))}
                                </select> */}
                                {/* <select className='billing' value={governate} onChange={(e) => { handleGovernateSelect(e.target.value); addVariant(e.target.value); }}>
    <option value="">Select a governate</option>
    {governates.map(g => (
        <option key={g._id} value={g.value}>{g.value}</option>
    ))}
</select> */}

                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4">
                        <div className="billing-info">
                            <label>Governate</label>
                            <input type="text" value={governate} onClick={handleGovernates} />
                        </div>
                    </div> */}
                        {/* <div className="col-lg-4 col-md-4">
                        <div className="billing-info">
                            <label>Address</label>
                            <input type="text" value={address_1} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="billing-info">
                            <label>Address</label>
                            <input type="text" value={address_1} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div> */}

                    </div>
                    < button style={{marginBottom : "2vh"}} className=' mt-3 btn btn-warning' onClick={placeOrderHandler}> <h4 style={{alignItems : "center"}}>Submit</h4></button>
                </div>
            </div>
            {/* <div>
            {governates.map(g => <h5 key={g._id}>{g.value}</h5>)}
        </div> */}
        </LayoutOne>
    );
};

export default Address;



