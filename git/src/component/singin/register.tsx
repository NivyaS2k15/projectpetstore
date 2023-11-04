import React, { useState } from 'react';
import register from "../../assests/register.jpg"
import {useNavigate} from "react-router-dom"
 
const SignUpForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
 
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const repeatPassword = document.getElementById('form3Example4cd') as HTMLInputElement;
 
    if (password !== repeatPassword.value) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };
 
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
 
    if (!email.includes('@')) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };
 
  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"></p>
                    <h2 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginBottom: '1rem' }}>
                     Sign Up
                    </h2>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          <input type="text" id="form3Example1c" style={{backgroundColor:"#b9b87d"}} className="form-control" placeholder="Your Name" />
                         
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-envelope fa-lg me-3 fa-fw"></i> */}
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          <input type="email" id="form3Example3c" style={{backgroundColor:"#b9b87d"}} className="form-control" placeholder="Your Email" onChange={handleEmailChange} />
                         
                          {emailError && <div className="text-danger">{emailError}</div>}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" style={{backgroundColor:"#b9b87d"}} className="form-control" placeholder="Password" onChange={handlePasswordChange} />
                         
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                     
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" onChange={handleCheckboxChange} />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" onClick={()=>navigate("/signin")} className="btn btn-primary btn-lg" disabled={!isChecked || !!passwordError || !!emailError} >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={register} className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default SignUpForm;