import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import $ from 'jquery';
import AOS from 'aos';
import rightArrowImage from '../assets/img/right-arrow.png' 
import loginhero from "../assets/img/login-hero-img.png"
import flashImage from "../assets/img/flash.svg"
declare global {
  interface Window {
    jQuery: typeof $;
    Typed: any;
  }
}

window.jQuery = $;

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  
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

  return (
    <>
      <Header />

      <section className="login-register p-0">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 left-side d-flex align-items-center">
              <div className="hero-card bounce-1" data-aos="fade-up-right" data-aos-duration="1500">
                <h4>Seamless Shopping Starts Here – Log In & Take Control!</h4>
                <img className="login-hero-img" src={loginhero} alt="" />
                <img className="flash-icon" src={flashImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-card" data-aos="fade-up" data-aos-duration="1500">
                <h2 className="fw-500 mb-1">Sign In</h2>
                <p className="mb-4">Sign in if you have an account in here.</p>
                <form action="#!">
                  <div className="mb-4">
                    <label htmlFor="Username" className="form-label mb-1">Username</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="Username" 
                      placeholder="Enter Your Username"
                      aria-describedby="eUsernameHelp" 
                      style={{ color: "white" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label mb-1">Password</label>
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
                  <div className="mb-4 text-end">
                    <a href="#" className="link-gray">Forgot password?</a>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center">
                    <button type="submit" className="btn btn-primary mb-3">
                      Login Now
                      <span><img src={rightArrowImage} alt="" /></span>
                    </button>
                    <h6 className="text-white">Not a member? <Link to="/signup" className="link-primary">Sign up</Link></h6>
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

export default Login;
