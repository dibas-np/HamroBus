import React , {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    useNavigate
} from "react-router-dom";
import API from './API';
const Success = () => {
  const [searchParams] = useSearchParams();
  let payment = true;
  const navigate = useNavigate();
  let id = searchParams.get('oid');
  const updatePayment = () => {
      let item = { payment }
      API.patch(`tickets/${id}/`, item).then((res) => navigateTo());
      
  };
  const navigateTo = () => {
      navigate('/ticket');
  }
  useEffect(() => {
        updatePayment();
    }, []);
  console.log(searchParams.get('oid')); // ▶ URLSearchParams {}
    return (
  <div>Payment Success! Redirecting Now...</div>
    );

};
export default Success; 