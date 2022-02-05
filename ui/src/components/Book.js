import React, { useRef, useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { Redirect, Routes, useParams } from "react-router-dom";
import swal from 'sweetalert';
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

const TITLE = 'Your Results';
const Book = () => {
  const [name, setName] = useState("");
  const [departureTime, setDepartureTime] = useState("06:00");
  const [arrivalTime, setArrivalTime] = useState("18:00");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(400);
  const [vehicleID, setVehicleID] = useState("");
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const { id } = useParams();
  const [departureLocation, setDepartureLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [routeID, setRouteID] = useState(id);
  const [disable, setDisable] = useState(false);


  useEffect(() => {
     refreshRoutes();
     console.log(`${routeID}`);
  }, []);
  
  const refreshRoutes = () => {
        API.get("routes/")
        .then((res) => {
            setRoutes(res.data);
        })
        .catch(console.error);
  };
 
  return (
    <div className = "container">
      <Helmet>
        <title> {TITLE} </title> 
      </Helmet>
      < div className = "list-group d-flex justify-content-center" >
        <h1 className="list-group-item">Book Ticket</h1>
        {routes.map((route, index) => {
                return (
                route.id == routeID ?
                <div key={routeID} className="card list-group-item" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{route.departureLocation} to {route.destinationLocation}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Departure Time: {route.departureTime}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Arrival Time: {route.arrivalTime}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Price: {route.price}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Vehicle ID: {route.vehicleID}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Departure Date: {route.departureDate}</h6>
                    {/* <Button variant="primary" onClick={() => {
                        setName(route.name);
                        setDepartureTime(route.departureTime);
                        setArrivalTime(route.arrivalTime);
                        setDepartureDate(route.departureDate);
                        setPrice(route.price);
                        setVehicleID(route.vehicleID);
                        setDepartureLocation(route.departureLocation);
                        setDestinationLocation(route.destinationLocation);
                        setDisable(true);
                    }}>
                        Select
                    </Button> */}
                </div>
            </div> : null
                );
               })}
        {/* {(routes.map((route) => {
            return(
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{route.departureLocation} to {route.destinationLocation}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Departure Time: {route.departureTime}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Arrival Time: {route.arrivalTime}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Price: {route.price}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Vehicle ID: {route.vehicleID}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Departure Date: {route.departureDate}</h6>
                    <Button variant="primary" onClick={() => {
                        setName(route.name);
                        setDepartureTime(route.departureTime);
                        setArrivalTime(route.arrivalTime);
                        setDepartureDate(route.departureDate);
                        setPrice(route.price);
                        setVehicleID(route.vehicleID);
                        setDepartureLocation(route.departureLocation);
                        setDestinationLocation(route.destinationLocation);
                        setDisable(true);
                    }}>
                        Select
                    </Button>
                </div>
            </div>
            );
        }))}
        
        ) */}

      </div>
    </div>
  );
};
export default Book;