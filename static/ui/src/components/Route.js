import React, { Component } from "react";
import { render } from "react-dom";
import Cookie from 'react-cookie';
import CSRFToken from "./csrftoken";
import AddRoute from "./AddRoute";

export default class Route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
            <AddRoute />
        }
}

const appDiv = document.getElementById("routeView");

render( < Route / > , appDiv);