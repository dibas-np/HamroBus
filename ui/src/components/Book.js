import React, {useRef, useState, useEffect } from "react";
import { ButtonGroup, InputGroup, ButtonToolbar,ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { Redirect, Routes, useParams } from "react-router-dom";
import swal from 'sweetalert';
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
import { capitalize } from "@mui/material";

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
   const [selected, setSelected] = useState(false);
   const [selectedStyle, setSelectedStyle] = useState({});
   const [selectedSeats, setSelectedSeats] = useState([]);
   const selectSeat = (e) => {
       if (selected) {
         setSelected(false);
         const newList = selectedSeats.filter((item) => item !== e.target.value);
         setSelectedSeats(newList);
         setSelectedStyle({});
         return
       }
       setSelected(true);
       const newList = selectedSeats.concat(e.target.value);
       console.log(selectedSeats.length);
       setSelectedSeats(newList);
       setSelectedStyle({
         backgroundColor: 'green',
       });}

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
      <h1 style={{textAlign:'center'}}>Book Ticket</h1>
      < div className = "item-group d-flex justify-content-center input-group" >
        {routes.map((route, index) => {
                return (
                route.id == routeID ?
                <div key={routeID} className="card list-group-item input-group-prepend" style={{ width: "24rem" }}>
                <div className="card-body">
                    <h5 style={{textTransform:"capitalize"}}className="card-title">{route.departureLocation} to {route.destinationLocation}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Departure Time: {route.departureTime}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Arrival Time: {route.arrivalTime}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Price: {route.price}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Vehicle ID: {route.vehicleID}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Departure Date: {route.departureDate}</h6>
                </div>
            </div> : null
                );
               })}
    <div style={{textAlign:'center', marginTop: '8px', marginLeft: '5px'}}className="input-group-prepend">
    <ButtonToolbar className="mb-3 d-flex justify-content-center" aria-label="Toolbar with Button groups">
    <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="secondary">Selected</Button>{' '}
      <Button variant="secondary">Booked</Button>{' '}
      <Button variant="secondary">Available</Button>
    </ButtonGroup>
  </ButtonToolbar>
    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="me-2" aria-label="First group">
      <Button variant="secondary" disabled={disable}>01</Button>{' '}
      <Button value="seat2" onClick={selectSeat} style={selectedStyle} variant="secondary">02</Button>{' '}
      <Button variant="secondary">03</Button>{' '}
      <Button variant="secondary">04</Button>{' '}
      <Button variant="secondary">05</Button>{' '}
      <Button variant="secondary">06</Button>{' '}
      <Button variant="secondary">07</Button>{' '}
      <Button variant="secondary">08</Button>{' '}
      <Button variant="secondary">09</Button>{' '}
      <Button variant="secondary">10</Button>{' '}
      <Button variant="secondary">11</Button>{' '}
      <Button variant="secondary">12</Button>{' '}
      <Button variant="secondary">13</Button>{' '}
      <Button variant="secondary">14</Button>{' '}
      <Button variant="secondary">15</Button>
    </ButtonGroup>
  </ButtonToolbar>
  <ButtonToolbar
    className="justify-content-between"
    aria-label="Toolbar with Button groups"
  >
    <ButtonGroup aria-label="First group">
      <Button value="seat16" style={selectedStyle} onClick={selectSeat} variant="secondary">16</Button>{' '}
      <Button variant="secondary">17</Button>{' '}
      <Button variant="secondary">18</Button>{' '}
      <Button variant="secondary">19</Button>{' '}
      <Button variant="secondary">20</Button>{' '}
      <Button variant="secondary">21</Button>{' '}
      <Button variant="secondary">22</Button>{' '}
      <Button variant="secondary">23</Button>{' '}
      <Button variant="secondary">24</Button>{' '}
      <Button variant="secondary">25</Button>{' '}
      <Button variant="secondary">26</Button>{' '}
      <Button variant="secondary">27</Button>{' '}
      <Button variant="secondary">28</Button>{' '}
      <Button variant="secondary">29</Button>{' '}
      <Button variant="secondary">30</Button>
    </ButtonGroup>
  </ButtonToolbar>
  <ButtonToolbar style={{marginTop:"8px"}}className="justify-content-between" aria-label="Toolbar with Button groups">
    <ButtonGroup  aria-label="First group">
      <Button variant="dark" disabled>Selected Seats: {selectedSeats}</Button>{' '}
      <Button variant="dark" disabled>Amount: Rs {price*selectedSeats.length}</Button>{' '}
    </ButtonGroup>
  </ButtonToolbar>
  </div>

      </div>
    </div>
  );
};
export default Book;