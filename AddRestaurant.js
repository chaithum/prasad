import Carousel from 'react-bootstrap/Carousel';
import React, { useState, } from "react";
 import { useNavigate } from "react-router-dom";
import axios from 'axios';
import config from '../config';
 
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBTextArea,
    MDBFile
  } from 'mdb-react-ui-kit';
 
// import imageurl from '../../public/images/logo512.png'

const AddRestaurant=()=>{
    // const classes = useStyles();
    //  const navigate = useNavigate();
    const [inputs, setInputs] = useState({
      restid:Math.round((Math.random())*100),
        restaurent_name:"",
        Area:"",
        city:"",
        zipcode:"",
        imageURL:"",
        contact_number:"",
        Description:"",
        state:""
    });
   
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      };
      const sendRequest = async () => {
     
        await axios
          .post(`${config.BASE_URL}/api/restaurant/add`, {
            restaurent_name: inputs.name,
            imageURL: inputs.imageURL,
            Area: inputs.Area,
            city: inputs.city,
            zipcode: inputs.zipcode,
            contact_number: inputs.contact_number,
            Description: inputs.Description,
            state: inputs.state
           
          }).then(console.log())
          .catch((err) => console.log(err));
        
      };
      const handleSubmit = (e) => {
        
        e.preventDefault();
        sendRequest()
      };
 
    return(
        <>
        <nav className="navbar navbar-light bg-light">
       
        <ul className="nav d-flex justify-content-between nav nav-pills">
        <li className="nav-item">
        <a className="navbar-brand" href="#">
          <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
          Food App
        </a>
        </li>
  <li className="nav-item">
    <a className="nav-link active" href="/AddRestaurant">Add Restaurant</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
 
</ul>
      </nav>
      <div className='container'>
      <Carousel >
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 img-fluid rounded-pill" src='images/restaturant1.jfif'  height="500" alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 img-fluid rounded-pill" src='images/restaturant1.jfif' height="500" alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
 
 
      <div className='container'>
      {/* form */}
      <MDBContainer className="mt-5">
      <MDBCard>
        <MDBCardBody>
          <h3 className="text-center mb-4">Add Restaurants</h3>
          <form className='container'>
           
            <div className="mb-4">
              <MDBInput
               onChange={handleChange}
                label="Restaurant Name"
                id="restaurent_name"
                type="text"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
              />
            </div>
{/* 
            <div className='d-flex justify-content-around'>
             <p class="text-left">Address</p>
            <MDBInput name='city' placeholder='cityname' type="text" style={{ backgroundColor: '#f0f8ff' }}/>
            <MDBInput name='state' placeholder='statename' type="text" style={{ backgroundColor: '#f0f8ff' }}/>
            <MDBInput name='zip-code' placeholder='zipcode' type="Number" style={{ backgroundColor: '#f0f8ff' }}/>
           
            </div>
 
            <br/> */} 

            <div className="mb-4">
            <MDBInput 
             
             onChange={handleChange}
              label="Area"
              id="Area"
              type="text"
              className="form-control"
              style={{ backgroundColor: '#f0f8ff' }} // Light background
              />
              <MDBInput 
             
               onChange={handleChange}
                label="City"
                id="city"
                type="text"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
                />
                 <MDBInput 
                   onChange={handleChange}
                label="State"
                id="state"
                type="text"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
            />
                <MDBInput 
               onChange={handleChange}
                label="Zipcode"
                id="zipcode"
                type="number"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background

                
              />
            </div>
 
            <div className="mb-4">
              <MDBInput
                onChange={handleChange}
                label='Contact Number'
                id="contact_number"
                type="tel"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
              />
            </div>
 
            <div className="mb-4">
            <MDBFile
            label='Default file input example'  
            id='imageURL'
            className="form-control"
            style={{ backgroundColor: '#f0f8ff' }}
             />
            </div>
 
            <div className="mb-4">
              <MDBTextArea
               onChange={handleChange}
                label="Description"
                id="Description"
                type="Description"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
              />
            </div>
 
            {/* Submit Button */}
            <MDBBtn color="primary" onClick={handleSubmit} type="submit">
          Add
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
 
</>
)
}
export default AddRestaurant