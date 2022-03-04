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

function App() {
return (
<Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/route' element={<AddRoute />} />
        <Route exact path='/result/:from/:destination' element={<Result />} />
        <Route exact path='/book/:id' element={<Book />} />
        <Route path='/ticket' element={<Tickets />} />
        <Route exact path='/success/:slug' element={<Success />} />
        {/* <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} /> */}
        <Route path='*' element={<PageNotFound />} />
    </Routes>
</Router>
);
}

export default App;