import * as React from 'react';
import '../../static/css/logos.css';

export default function Footer() {
 
  return (
<div className="my-5 position-sticky">

  <footer className="bg-light text-center">

  <div className="container p-4 pb-0">
   
    <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">
         
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
           
            <div className="form-outline mb-4">
              <input type="email" id="newsletterEmail" className="form-control" />
              <label className="form-label" htmlFor="newslettterEmail">Email address</label>
            </div>
          </div>

          <div className="col-auto">
          
            <button type="submit" className="btn btn-primary mb-4">
              Subscribe
            </button>
          </div>
         
        </div>
       
      </form>
    </section>
   
  </div>
  
  < div className = "text-center p-3"
  style = {
      {
          backgroundColor: '#F2F2F2'
      }
  } >
    © 2022 Copyright:
    <a style={{
        textDecoration: 'none',
        color: '#39ADFF'
    }} href="/home"> HamroBus.com</a>
  </div>

</footer>
  
</div>
  
  );
}
