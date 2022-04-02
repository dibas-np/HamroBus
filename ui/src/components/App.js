import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Home from './home';
import Result from './Result';
import AddRoute from './AddRoute';
import Book from './Book';
import Tickets from './Tickets';
import Success  from './success';
import PageNotFound from './404page';
import Footer from './footer';
import LogosBox from './partners';
import AboutUs from './aboutus';
import Contact from './contact';

function App() {
return (
<Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/route' element={<AddRoute />} />
        <Route exact path='/result/:from/:destination' element={<Result />} />
        <Route exact path='/book/:username/:id' element={<Book />} />
        <Route path='/ticket' element={<Tickets />} />
        <Route exact path='/success/:slug' element={<Success />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} /> */}
        {/* <Route path='*' element={<PageNotFound />} /> */}
    </Routes>
     <LogosBox />
    <Footer />
</Router>
);
}

export default App;