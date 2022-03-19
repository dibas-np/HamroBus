import * as React from 'react';
import '../../static/css/logos.css';
import API from './API';

export default function Footer() {
    const [email, setEmail] = React.useState('');
    
    function clearSelect() {
       setEmail('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
         if (email === '') {
             swal("Error!", "Please enter email first!", "error");
             return
         }
        let item = {
           email
        };
        swal({
                title: "Confirm Subscription",
                text: "Are you sure you want to subscribe to the newsletter?",
                icon: "info",
                buttons: true,
                dangerMode: false,
            })
            .then((willSubscribe) => {
                if (willSubscribe) {
                    API.post("newsletter/", item);
                    clearSelect();
                    swal("You have successfully subscribed to the newsletter!", {
                        icon: "success",
                    });
                } else {
                    swal("Subscription cancelled!");
                    clearSelect();
                }
            });
    };
        
 
  return (
<div className="my-5 position-sticky">

  <footer className="bg-light text-center">

  <div className="container p-4 pb-0">
   
    <section className="">
      <form onSubmit={onSubmit}>
        
        <div className="row d-flex justify-content-center">
         
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
           
            <div className="form-outline mb-4">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="newsletterEmail" className="form-control" />
              <label className="form-label">Email address</label>
            </div>
          </div>

          <div className="col-auto">
          
            <button onCLick={onSubmit} type="submit" className="btn btn-primary mb-4">
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
