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

const TITLE = 'Book Ticket';
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
  const [seat1, setSeat1] = useState(false);
  const [seat2, setSeat2] = useState(false);
  const [seat3, setSeat3] = useState(false);
  const [seat4, setSeat4] = useState(false);
  const [seat5, setSeat5] = useState(false);
  const [seat6, setSeat6] = useState(false);
  const [seat7, setSeat7] = useState(false);
  const [seat8, setSeat8] = useState(false);
  const [seat9, setSeat9] = useState(false);
  const [seat10, setSeat10] = useState(false);
  const [seat11, setSeat11] = useState(false);
  const [seat12, setSeat12] = useState(false);
  const [seat13, setSeat13] = useState(false);
  const [seat14, setSeat14] = useState(false);
  const [seat15, setSeat15] = useState(false);
  const [seat16, setSeat16] = useState(false);
  const [seat17, setSeat17] = useState(false);
  const [seat18, setSeat18] = useState(false);
  const [seat19, setSeat19] = useState(false);
  const [seat20, setSeat20] = useState(false);
  const [seat21, setSeat21] = useState(false);
  const [seat22, setSeat22] = useState(false);
  const [seat23, setSeat23] = useState(false);  
  const [seat24, setSeat24] = useState(false);
  const [seat25, setSeat25] = useState(false);
  const [seat26, setSeat26] = useState(false);
  const [seat27, setSeat27] = useState(false);
  const [seat28, setSeat28] = useState(false);
  const [seat29, setSeat29] = useState(false);
  const [seat30, setSeat30] = useState(false);




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
          for(let i=0; i<res.data.length; i++){
            if(res.data[i].id==routeID){
              console.log("FOund!");
              console.log(res.data[i].id);
              setSeat1(res.data[i].seat1);
              setSeat2(res.data[i].seat2);
              setSeat3(res.data[i].seat3);
              setSeat4(res.data[i].seat4);
              setSeat5(res.data[i].seat5);
              setSeat6(res.data[i].seat6);
              setSeat7(res.data[i].seat7);
              setSeat8(res.data[i].seat8);
              setSeat9(res.data[i].seat9);
              setSeat10(res.data[i].seat10);
              setSeat11(res.data[i].seat11);
              setSeat12(res.data[i].seat12);
              setSeat13(res.data[i].seat13);
              setSeat14(res.data[i].seat14);
              setSeat15(res.data[i].seat15);
              setSeat16(res.data[i].seat16);
              setSeat17(res.data[i].seat17);
              setSeat18(res.data[i].seat18);
              setSeat19(res.data[i].seat19);
              setSeat20(res.data[i].seat20);
              setSeat21(res.data[i].seat21);
              setSeat22(res.data[i].seat22);
              setSeat23(res.data[i].seat23);
              setSeat24(res.data[i].seat24);
              setSeat25(res.data[i].seat25);
              setSeat26(res.data[i].seat26);
              setSeat27(res.data[i].seat27);
              setSeat28(res.data[i].seat28);
              setSeat29(res.data[i].seat29);
              setSeat30(res.data[i].seat30);
            } 
          }
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
      <Button variant="secondary" disabled={seat1}>01</Button>{' '}
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