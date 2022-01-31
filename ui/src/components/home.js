import React from "react";
import {
    Helmet
} from 'react-helmet';
import SearchBox from "./SearchBox";
const TITLE = 'Home';
const Home = () => (
<div>
    <Helmet>
        <title>{TITLE}</title>
    </Helmet>
    <div className="home">
        <SearchBox />
    </div>

</div>
);

export default Home;