import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import Home from './home';
import Result from './Result';
import AddRoute from './AddRoute';
import Book from './Book';

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
        {/* <Route path='/blogs' element={<Blogs />} />
        <Route path='/sign-up' element={<SignUp />} /> */}
    </Routes>
</Router>
);
}

export default App;