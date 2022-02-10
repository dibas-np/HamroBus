import React, { useRef, useState, useEffect } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import API from "./API";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet'
import { Redirect, useParams } from "react-router-dom";
import swal from 'sweetalert';
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

const TITLE = 'Your Tickets';
const Tickets = () => {
  const [name, setName] = useState("");
  
  const [departureTime, setDepartureTime] = useState("06:00");
  const [arrivalTime, setArrivalTime] = useState("18:00");
  const [departureDate, setDepartureDate] = useState("");
  const [price, setPrice] = useState(400);
  const [vehicleID, setVehicleID] = useState("");
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
// let routes = [];
//   const { from, destination } = useParams();
  const [departureLocation, setDepartureLocation] = useState("Kathmandu");
  const [destinationLocation, setDestinationLocation] = useState("Gulmi");
  const [username, setUsername] = useState("");
//   const [routesData, setRoutesData]= useState([]);
//   const [ticketData, setTicketData] = useState([]);
let routeData = [];
let ticketData = [];
  const firstUpdate = useRef(true);
//   const [routeID, setRouteID] = useState(null);
  const [disable, setDisable] = useState(false);
//   const [filteredResults, setFilteredResults] = useState([]);
let loaded = true;
  const onSubmit = (e) => {
      e.preventDefault();
          navigate('/result/' + departureLocation + '/' + destinationLocation);
  };

  useEffect(() => {
    refreshRoutes();
  }, []);
  
  const refreshRoutes = () => {
        API.get("tickets/")
        .then((res) => {
           setRoutes(res.data);
            getUsername();
        })
        .catch(console.error);
      
  };
//    const getRoutes = (e) => {
//        API.get("routes/")
//            .then((res) => {
//             //    setRoutesData(res.data);
//             routeData=res.data;
//             console.log(routeData);
//             mergeRoute();
//            })
//            .catch(console.error);
//    };
   const getUsername = () => {
       API.get("loggeduser/1/").then(res => {
           // setUsername(res.data.username);
           setUsername(res.data.username);
           console.log("Username" + username);
        //    actualusername = res.data.username + "";
        //    console.log(actualusername);
       })

   }
const onDelete = (id) => {
    swal({
            title: "Are you sure?",
            text: "Once cancelled, it cannot be recovered!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                API.delete(`tickets/${id}/`).then((res) => refreshRoutes());
                swal("Your ticket has been successfully cancelled!", {
                    icon: "success",
                });
            } else {
                swal("Cancel process cancelled!");
            }
        });
    // API.delete(`routes/${id}/`).then((res) => refreshRoutes());
};
  return (
    <div className = "container mt-5 resultContainer mw-100 mh-100">
      <Helmet>
        <title> {TITLE} </title> 
      </Helmet>
      < div className = "row d-flex justify-content-center result-rows" >
        <div className="col-md-4">
          {/* <h3 className="float-left">Create a new Route</h3> */}
          <Form onSubmit={onSubmit} className="mt-4">

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Departure Location </Form.Label>
              <Form.Control as="select"
                placeholder="Enter Departure Location"
                value={departureLocation}
                onChange={(e) => setDepartureLocation(e.target.value)}>
                  <option value="achham">Achham</option>

                  <option value="arghakhanchi">Arghakhanchi</option>

                  <option value="baglung">Baglung</option>

                  <option value="baitadi">Baitadi</option>

                  <option value="bajhang">Bajhang</option>

                  <option value="bajura">Bajura</option>

                  <option value="banke">Banke</option>

                  <option value="bara">Bara</option>

                  <option value="bardiya">Bardiya</option>

                  <option value="bhaktapur">Bhaktapur</option>

                  <option value="bhojpur">Bhojpur</option>

                  <option value="chitwan">Chitwan</option>

                  <option value="dadeldhura">Dadeldhura</option>

                  <option value="dailekh">Dailekh</option>

                  <option value="dang deukhuri">Dang deukhuri</option>

                  <option value="darchula">Darchula</option>

                  <option value="dhading">Dhading</option>

                  <option value="dhankuta">Dhankuta</option>

                  <option value="dhanusa">Dhanusa</option>

                  <option value="dholkha">Dholkha</option>

                  <option value="dolpa">Dolpa</option>

                  <option value="doti">Doti</option>

                  <option value="gorkha">Gorkha</option>

                  <option value="gulmi">Gulmi</option>

                  <option value="humla">Humla</option>

                  <option value="ilam">Ilam</option>

                  <option value="jajarkot">Jajarkot</option>

                  <option value="jhapa">Jhapa</option>

                  <option value="jumla">Jumla</option>

                  <option value="kailali">Kailali</option>

                  <option value="kalikot">Kalikot</option>

                  <option value="kanchanpur">Kanchanpur</option>

                  <option value="kapilvastu">Kapilvastu</option>

                  <option value="kaski">Kaski</option>

                  <option value="kathmandu">Kathmandu</option>

                  <option value="kavrepalanchok">Kavrepalanchok</option>

                  <option value="khotang">Khotang</option>

                  <option value="lalitpur">Lalitpur</option>

                  <option value="lamjung">Lamjung</option>

                  <option value="mahottari">Mahottari</option>

                  <option value="makwanpur">Makwanpur</option>

                  <option value="manang">Manang</option>

                  <option value="morang">Morang</option>

                  <option value="mugu">Mugu</option>

                  <option value="mustang">Mustang</option>

                  <option value="myagdi">Myagdi</option>

                  <option value="nawalparasi">Nawalparasi</option>

                  <option value="nuwakot">Nuwakot</option>

                  <option value="okhaldhunga">Okhaldhunga</option>

                  <option value="palpa">Palpa</option>

                  <option value="panchthar">Panchthar</option>

                  <option value="parbat">Parbat</option>

                  <option value="parsa">Parsa</option>

                  <option value="pyuthan">Pyuthan</option>

                  <option value="ramechhap">Ramechhap</option>

                  <option value="rasuwa">Rasuwa</option>

                  <option value="rautahat">Rautahat</option>

                  <option value="rolpa">Rolpa</option>

                  <option value="rukum">Rukum</option>

                  <option value="rupandehi">Rupandehi</option>

                  <option value="salyan">Salyan</option>

                  <option value="sankhuwasabha">Sankhuwasabha</option>

                  <option value="saptari">Saptari</option>

                  <option value="sarlahi">Sarlahi</option>

                  <option value="sindhuli">Sindhuli</option>

                  <option value="sindhupalchok">Sindhupalchok</option>

                  <option value="siraha">Siraha</option>

                  <option value="solukhumbu">Solukhumbu</option>

                  <option value="sunsari">Sunsari</option>

                  <option value="surkhet">Surkhet</option>

                  <option value="syangja">Syangja</option>

                  <option value="tanahu">Tanahu</option>

                  <option value="taplejung">Taplejung</option>

                  <option value="terhathum">Terhathum</option>

                  <option value="udayapur">Udayapur</option>

            </Form.Control>
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStarring">
              <Form.Label>Destination Location</Form.Label>
              <Form.Control as="select"
                placeholder="Enter Destination Location"
                value={destinationLocation}
                onChange={(e) => setDestinationLocation(e.target.value)}>
                  <option value="achham">Achham</option>

                  <option value="arghakhanchi">Arghakhanchi</option>

                  <option value="baglung">Baglung</option>

                  <option value="baitadi">Baitadi</option>

                  <option value="bajhang">Bajhang</option>

                  <option value="bajura">Bajura</option>

                  <option value="banke">Banke</option>

                  <option value="bara">Bara</option>

                  <option value="bardiya">Bardiya</option>

                  <option value="bhaktapur">Bhaktapur</option>

                  <option value="bhojpur">Bhojpur</option>

                  <option value="chitwan">Chitwan</option>

                  <option value="dadeldhura">Dadeldhura</option>

                  <option value="dailekh">Dailekh</option>

                  <option value="dang deukhuri">Dang deukhuri</option>

                  <option value="darchula">Darchula</option>

                  <option value="dhading">Dhading</option>

                  <option value="dhankuta">Dhankuta</option>

                  <option value="dhanusa">Dhanusa</option>

                  <option value="dholkha">Dholkha</option>

                  <option value="dolpa">Dolpa</option>

                  <option value="doti">Doti</option>

                  <option value="gorkha">Gorkha</option>

                  <option value="gulmi">Gulmi</option>

                  <option value="humla">Humla</option>

                  <option value="ilam">Ilam</option>

                  <option value="jajarkot">Jajarkot</option>

                  <option value="jhapa">Jhapa</option>

                  <option value="jumla">Jumla</option>

                  <option value="kailali">Kailali</option>

                  <option value="kalikot">Kalikot</option>

                  <option value="kanchanpur">Kanchanpur</option>

                  <option value="kapilvastu">Kapilvastu</option>

                  <option value="kaski">Kaski</option>

                  <option value="kathmandu">Kathmandu</option>

                  <option value="kavrepalanchok">Kavrepalanchok</option>

                  <option value="khotang">Khotang</option>

                  <option value="lalitpur">Lalitpur</option>

                  <option value="lamjung">Lamjung</option>

                  <option value="mahottari">Mahottari</option>

                  <option value="makwanpur">Makwanpur</option>

                  <option value="manang">Manang</option>

                  <option value="morang">Morang</option>

                  <option value="mugu">Mugu</option>

                  <option value="mustang">Mustang</option>

                  <option value="myagdi">Myagdi</option>

                  <option value="nawalparasi">Nawalparasi</option>

                  <option value="nuwakot">Nuwakot</option>

                  <option value="okhaldhunga">Okhaldhunga</option>

                  <option value="palpa">Palpa</option>

                  <option value="panchthar">Panchthar</option>

                  <option value="parbat">Parbat</option>

                  <option value="parsa">Parsa</option>

                  <option value="pyuthan">Pyuthan</option>

                  <option value="ramechhap">Ramechhap</option>

                  <option value="rasuwa">Rasuwa</option>

                  <option value="rautahat">Rautahat</option>

                  <option value="rolpa">Rolpa</option>

                  <option value="rukum">Rukum</option>

                  <option value="rupandehi">Rupandehi</option>

                  <option value="salyan">Salyan</option>

                  <option value="sankhuwasabha">Sankhuwasabha</option>

                  <option value="saptari">Saptari</option>

                  <option value="sarlahi">Sarlahi</option>

                  <option value="sindhuli">Sindhuli</option>

                  <option value="sindhupalchok">Sindhupalchok</option>

                  <option value="siraha">Siraha</option>

                  <option value="solukhumbu">Solukhumbu</option>

                  <option value="sunsari">Sunsari</option>

                  <option value="surkhet">Surkhet</option>

                  <option value="syangja">Syangja</option>

                  <option value="tanahu">Tanahu</option>

                  <option value="taplejung">Taplejung</option>

                  <option value="terhathum">Terhathum</option>

                  <option value="udayapur">Udayapur</option>
              </Form.Control>
              
            </Form.Group>
    
            <div className="float-right">
              <Button
                variant="outline-info"
                className="btn btn-outline-info"
                type="submit"
                // disabled={disable}
                onClick={onSubmit}
                className="mx-2"
              >
                Search
              </Button>
            </div>
          </Form>
        </div>
        <div style={{color: '#001845'}} className="col-md-8 m">
              {routes.map((ticket, index) => {
                return (
                  ticket.username === "dibas" ?
                  <div className="card mb-3" key={ticket.id}>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 style={{textTransform:"capitalize"}}>Journey: {ticket.departureLocation} to {ticket.destinationLocation}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5>Departure Date: {ticket.departureDate}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Username: {ticket.username}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5>Booked Seats: {ticket.bookedSeat1}, {ticket.bookedSeat2}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Departure Time: {ticket.departureTime}</h5>
                            </div>
                            <div className="col-md-6">
                                <h5>Amount: Rs {ticket.amount}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Arrival Time: {ticket.arrivalTime}</h5>
                            </div>
                            <div className="col-md-6">
                                < form action = "https://uat.esewa.com.np/epay/main"
                                method = "POST" >
                                    <input value={ticket.amount} name="tAmt" type="hidden" />
                                    <input value={ticket.amount} name="amt" type="hidden" />
                                    <input value="0" name="txAmt" type="hidden" />
                                    <input value="0" name="psc" type="hidden" />
                                    <input value="0" name="pdc" type="hidden" />
                                    <input value="EPAYTEST" name="scd" type="hidden" />
                                    <input value={ticket.id} name="pid" type="hidden" />
                                    <input value="http://127.0.0.1:8000/success" type="hidden" name="su" />
                                    <input value="http://127.0.0.1:8000/ticket" type="hidden" name="fu" />
                                    <input className="btn btn-success" value="   Pay Now    " type="submit" disabled={ticket.payment} />
                                </form>
                                {/* <Button style={{marginRight: '2px'}}variant="success" className="btn" disabled={ticket.payment}>Pay Now</Button> */}
                                <Button variant="danger" className="btn" onClick={() => onDelete(ticket.id)}>Cancel Ticket</Button>
                            </div>
                        </div>
                    </div>    
                </div>
                : null
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default Tickets;