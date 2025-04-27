import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import $ from 'jquery';
import AOS from 'aos';
import rightArrowImage from '../assets/img/right-arrow.png';
import loginhero from "../assets/img/login-hero-img.png";
import flashImage from "../assets/img/flash.svg";
import googleIcon from "../assets/img/g.png";

declare global {
  interface Window {
    jQuery: typeof $;
    Typed: any;
  }
}

window.jQuery = $;

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  useEffect(() => {
    AOS.init();

    if ($("#typed").length && window.Typed) {
      new window.Typed("#typed", {
        strings: ["Home", "Office", "Shop"],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
      });
    }

    const script = document.createElement('script');
    script.src = '/js/typed.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Header />

      <section className="login-register p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 left-side d-flex align-items-center">
              <div className="hero-card bounce-1" data-aos="fade-up-right" data-aos-duration="1500">
                <h4>Seamless Shopping Starts Here – Log In & Take Control!</h4>
                <img className="login-hero-img" src={loginhero} alt="" />
                <img className="flash-icon" src={flashImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="form-card" data-aos="fade-up" data-aos-duration="1500">
                <h2 className="fw-500 mb-1">Create Account</h2>
                <p className="mb-4">Sign up if not you have an account in here.</p>
                <form action="#!">
                  <div className="mb-4">
                    <label htmlFor="FullName" className="form-label mb-1">FullName</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="FullName" 
                      placeholder="Enter Your FullName"
                      aria-describedby="eUsernameHelp" 
                      style={{ color: "white" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="Email" className="form-label mb-1">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="Email"
                      placeholder="Enter Your Email Address" 
                      aria-describedby="eUsernameHelp" 
                      style={{ color: "white" }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mb-4">
                      <label htmlFor="Password" className="form-label mb-1">Password</label>
                      <div className="input-group">
                        <input 
                          type={showPassword ? "text" : "password"} 
                          className="form-control" 
                          placeholder="Enter Your Password"
                          aria-label="Password" 
                          aria-describedby="basic-addon1" 
                          style={{ color: "white" }}
                        />
                        <span 
                          className="input-group-text" 
                          onClick={togglePasswordVisibility}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-4">
                      <label htmlFor="ConfirmPassword" className="form-label mb-1">Confirm Password</label>
                      <div className="input-group">
                        <input 
                          type={showConfirmPassword ? "text" : "password"} 
                          className="form-control" 
                          placeholder="Re password"
                          aria-label="Password" 
                          aria-describedby="basic-addon1" 
                          style={{ color: "white" }}
                        />
                        <span 
                          className="input-group-text" 
                          onClick={toggleConfirmPasswordVisibility}
                          style={{ cursor: 'pointer' }}
                        >
                          <i className={showConfirmPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="divider mb-5"><span>OR</span></div>
                  <div className="d-flex flex-wrap justify-content-center">
                    <button type="submit" className="btn btn-outline-secondary mb-4">
                      Sign Up With Google<span><img src={googleIcon} alt="" /></span>
                    </button>
                    <button type="submit" className="btn btn-primary mb-3">
                      Sign Up Now<span><img src={rightArrowImage} alt="" /></span>
                    </button>
                    <h6 className="text-muted w-100 text-center">Already a member? <Link to="/login" className="link-primary">Sign In</Link></h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp; 