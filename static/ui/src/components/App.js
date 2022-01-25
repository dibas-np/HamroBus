import React, { Component } from "react";
import { render } from "react-dom";
import Login from "./Login";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1> Testing React Code</h1>
    }
}

// const appDiv = document.getElementById("app");

// render(<App / > , appDiv);