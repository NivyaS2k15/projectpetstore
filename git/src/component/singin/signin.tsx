import React, { useState } from 'react';
import './signin.module.css';
import picture from '../../assests/SignIn.jpg'
import logosignin from '../../assests/logosignin.png'

 
const Usersignin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
 
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!isValidEmail(newEmail)) {
      setEmailError('Enter a valid email!');
    } else {
      setEmailError('');
    }
  };
 
  const isValidEmail = (email: string) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
 
  return (
    <>
        <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3">
                <div className="row g-0">
                  <div className="col-lg-6 bg-secondary">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src={logosignin}
                          style={{ width: '185px' }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-4">SignIn</h4>
                      </div>
                      <form>
                        <p>Please sign in to your account</p>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example11">
                            Username
                          </label>
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="username"
                            style={{backgroundColor:"#b9b87d"}} 
                            
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example33">
                            Email
                          </label>
                          <input
                            type="email"
                            id="form2Example33"
                            className={`form-control ${emailError ? 'is-invalid' : ''}`}
                            placeholder="email"
                            value={email}
                            onChange={handleEmailChange}
                            style={{backgroundColor:"#b9b87d"}} 
                          />
                          {emailError && (
                            <div className="invalid-feedback">{emailError}</div>
                          )}
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example22">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="password"
                            style={{backgroundColor:"#b9b87d"}} 
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg mb-3"
                            type="button"
                          >
                            Log in
                          </button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">Sign Up</button>
                  </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2 ">
                  <img
                          src={picture}
                          style={{ width: '400px', height:'auto'}}
                          alt="logo"
                        />
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h2 className="mb-4 text-black"></h2>
                      <p className="small text-black mb-0">
                      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default Usersignin;
 
