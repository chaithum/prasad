import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBTextArea,
    MDBCardImage,MDBFile
  } from 'mdb-react-ui-kit';
 
// import imageurl from '../../public/images/logo512.png'
 
const AddRestaurant=()=>{
    const classes = useStyles();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        restaurent_name: "",
        Address: "",
        formFileMultiple: "",
        contact_number:"",
        Description:""
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      };
      const sendRequest = async () => {
        const res = await axios
          .post(`${config.BASE_URL}/api/admin/AddRestaurant`, {
            title: inputs.title,
            desc: inputs.description,
            img: inputs.imageURL,
            user: localStorage.getItem("userId"),
          })
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest()
          .then((data) => console.log(data))
          .then(() => navigate("/home"));
      };
 
    return(
        <>
        <nav class="navbar navbar-light bg-light">
       
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
          <form className=''>
           
            <div className="mb-4">
              <MDBInput
            //    onChange={handleChange}
                label="Restaurant Name"
                id="restaurent_name"
                type="text"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
              />
            </div>
 
         
            <div className="mb-4">
              <MDBTextArea
            //    onChange={handleChange}
                label="Address"
                id="Address"
                type="Address"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
              />
            </div>
 
            <div className="mb-4">
              <MDBInput
            //    onChange={handleChange}
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
            id='formFileMultiple'
            className="form-control"
            style={{ backgroundColor: '#f0f8ff' }}
             />
            </div>
 
            <div className="mb-4">
              <MDBTextArea
            //    onChange={handleChange}
                label="Description"
                id="Description"
                type="Description"
                className="form-control"
                style={{ backgroundColor: '#f0f8ff' }} // Light background
              />
            </div>
 
            {/* Submit Button */}
            <MDBBtn color="primary" type="submit">
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