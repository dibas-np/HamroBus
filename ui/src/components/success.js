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
  const [uid, setUid] = React.useState(0);
  const updatePayment = () => {
      let item = { payment }
      API.patch(`tickets/${id}/`, item).then((res) => navigateTo());
      getUsername();
      
  };
  const navigateTo = () => {
      navigate('/'+uid+'/ticket');
  }
  useEffect(() => {
        updatePayment();
    }, []);
    const getUsername = () => {
      API.get("loggeduser/1/").then(res => {
        // setUsername(res.data.username);
        setUsername(res.data.username);
        setUid(res.data.id);
        console.log("Username" + username);
      }).catch(console.error);

    }
  console.log(searchParams.get('oid')); // ▶ URLSearchParams {}
    return (
  <div>Payment Success! Redirecting Now...</div>
    );

};
export default Success; 