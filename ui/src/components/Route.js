// import React, { Component } from "react";
// import { render } from "react-dom";
// import Cookie from 'react-cookie';
// import CSRFToken from "./csrftoken";
// import AddRoute from "./AddRoute";
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default class Route extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//             <AddRoute />
//         }
// }

// const appDiv = document.getElementById("routeView");

// render( < Route / > , appDiv);
 import React from "react";
 import ReactDOM from "react-dom";
 import { BrowserRouter } from "react-router-dom";
 import AddRoute from "./AddRoute";
 
 ReactDOM.render( 
        <BrowserRouter >
            <App / >
        </BrowserRouter>,
        document.getElementById("routeView")
 );