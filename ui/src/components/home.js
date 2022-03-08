import React from "react";
import {
    Helmet
} from 'react-helmet';
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
const TITLE = 'Home';
const Home = () => (
<div>
    <Helmet>
        <title>{TITLE}</title>
    </Helmet>
    < div className = "home"
    style = {
        {
            backgroundImage: '../../images/Cover.png'
        }
    } >
        <Navbar />
        <SearchBox />
    </div>

</div>
);

export default Home;