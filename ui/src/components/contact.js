import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import '../../static/css/contact.css';
import swal from 'sweetalert';
import Helmet from 'react-helmet';

const TITLE = 'Contact Us';
const Contact = () => {
   const SERVICE_ID = "service_sfv7ilo";
   const TEMPLATE_ID = "hamrobus_contact";
   const USER_ID = "sZWlIOLOz4fTiSzmR";

    const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        swal({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        swal({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <div style={{padding: '30px'}} className="Contact">
       <Helmet>
        <title> {TITLE} </title> 
      </Helmet>
      <h2>Contact Us</h2>
      <Form onSubmit={handleOnSubmit}>
        < Form.Group className = "mb-3"
        controlId = "form-input-control-email" name="from_email" >
          
        <Form.Label>Email address</Form.Label>
        <Form.Control name="from_email" type="email" placeholder="name@gmail.com" required />
      </Form.Group>
      < Form.Group className = "mb-3"
      controlId = "form-input-control-last-name" name="from_name" >
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="from_name" type="text" placeholder="Name..." required/>
      </Form.Group>
       
       < Form.Group className = "mb-3"
       controlId = "form-textarea-control-opinion" name="message" >
        <Form.Label>Message for Admin</Form.Label>
        <Form.Control name="message" as="textarea"/>
      </Form.Group>
        <Button type='submit' className='btn-danger'>Submit</Button>
      </Form>
    </div>
  );
}
export default Contact;