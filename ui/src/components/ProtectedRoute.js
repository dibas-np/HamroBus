import React from 'react';
import { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import API from './API';

const ProtectedRoute =()=>{
    
    const [isAuthenticated, setIsAuthenticated] = useState("");
   useEffect(() => {
       getUsername();
   }, []);
        const Component = this.props.component;
        const getUsername = () => {
            API.get("loggeduser/1/").then(res => {
                setIsAuthenticated(res.data.username);
            }).catch(console.error);
        }
        return isAuthenticated ? (
            <Component />
        ) : (
            <Link to={{ pathname: '/login/' }} />
        );
    
}
export default ProtectedRoute;