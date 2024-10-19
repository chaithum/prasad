import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdb-react-ui-kit";
import { MDBAlert} from "mdbreact"
import config from "../config";

const DisplayRestaurants = () => {
  const [restaurant, setRestaurants] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/api/restaurant/fetch`);
        setRestaurants(response.data.restaurants);
      } catch (err) {
        setError("Failed to fetch restaurant.");
      }
    };
    fetchRestaurants();
  }, []);

  const handleUpdate = (restaurantId) => {
    navigate(`/update/:restid/${restaurantId}`);
  };

  const handleDelete = async (restaurantId) => {
    // const handleDelete = async (Id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this restaurant?");
    if (!confirmDelete) return; // Exit if the user cancels

    try {
     const response = await axios.delete(`${config.BASE_URL}/api/restaurant/delete`); 
    //   await axios.delete(url);
    if(restaurant.restid === restaurantId);
      setRestaurants(response.data.restaurants);
    } catch (err) {
      setError("Failed to delete restaurant.");
    }
  };






    

  return (
    <MDBContainer className="mt-5">
      {error && <MDBAlert color="danger">{error}</MDBAlert>}
      <MDBRow>
        {restaurant &&
        restaurant.restaurants && restaurant.restaurants.map((restaurant,index) => (
          <MDBCol md="4" key={index} className="mb-4">
            <MDBCard>
              <img
                src={restaurant.imageURL}
                alt={restaurant.name}
                className="img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody>
                <MDBCardTitle>{restaurant.restaurant_name}</MDBCardTitle>
                <MDBCardText>{restaurant.Description}</MDBCardText>
                <MDBCardText>{restaurant.restid}</MDBCardText>

               <button className="btn btn-warning" onClick={() => handleUpdate(restaurant.restid)}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(restaurant.restid)}>
                  Delete
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default DisplayRestaurants;