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

const LoginHebrew: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'he');

    AOS.init();

    if ($("#typed").length && window.Typed) {
      new window.Typed("#typed", {
        strings: ["בַּיִת", "מִשׂרָד", "לִקְנוֹת"],
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
      document.documentElement.removeAttribute('dir');
      document.documentElement.setAttribute('lang', 'en');
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
                <h4>קניות חלקות מתחילות כאן - היכנס וקבל שליטה!</h4>
                <img className="login-hero-img" src={loginhero} alt="" />
                <img className="flash-icon" src={flashImage} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-card" data-aos="fade-up" data-aos-duration="1500">
                <h2 className="fw-500 mb-1">היכנס</h2>
                <p className="mb-4">היכנס אם יש לך חשבון כאן.</p>
                <form action="#!">
                  <div className="mb-4">
                    <label htmlFor="Username" className="form-label mb-1">שם משתמש</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="Username" 
                      placeholder="הזן את שם המשתמש שלך"
                      aria-describedby="eUsernameHelp" 
                      style={{ color: "white" }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label mb-1">סִיסמָה</label>
                    <div className="input-group">
                      <input 
                        type={showPassword ? "text" : "password"}
                        className="form-control" 
                        placeholder="הזן את הסיסמה שלך" 
                        aria-label="Password"
                        aria-describedby="basic-addon1" 
                        style={{
                          borderRadius: "0px 12px 12px 0px",
                          color: "white"
                        }}
                      />
                      <span 
                        className="input-group-text" 
                        onClick={togglePasswordVisibility} 
                        style={{ 
                          cursor: 'pointer',
                          borderRadius: "12px 0px 0px 12px" 
                        }}
                      >
                        <i className={showPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 text-end">
                    <a href="#" className="link-gray">שכחת סיסמא?</a>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center">
                    <button type="submit" className="btn btn-primary mb-3">
                      התחבר עכשיו
                      <span><img src={rightArrowImage} alt="" /></span>
                    </button>
                    <h6 className=" w-100 text-center text-white">לא חבר? <Link to="/signup/hebrew" className="link-primary">הירשם</Link></h6>
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

export default LoginHebrew; 