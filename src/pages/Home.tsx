import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import $ from 'jquery';
import AOS from 'aos';
import rightArrowImage from '../assets/img/right-arrow.png';
import heroImage from '../assets/img/hero_banner.jpg';
import aboutImg1 from '../assets/img/about-img1.jpg';
import aboutImg2 from '../assets/img/about-img2.jpg';
import aboutImg3 from '../assets/img/about-img3.jpg';
import anySizeIcon from '../assets/img/AnySizeAndColor.png';
import fastDeliveryIcon from '../assets/img/FastDelivery.png';
import qualityMaterialsIcon from '../assets/img/QualityMaterials.png';
import chairProduct from '../assets/img/Chair.png';
import bedProduct from '../assets/img/Bed.png';
import sofaProduct from '../assets/img/Sofa.png';
import tableProduct from '../assets/img/Table.png';
import diningTableProduct from '../assets/img/DiningTable.png';
import officeDeskProduct from '../assets/img/OfficeDesk.png';
import subscribeImg from '../assets/img/subscribe-img.png';
import rightArrowWhite from '../assets/img/right-arrow-w.png';
import logoIcon from '../assets/img/logo.png';

declare global {
  interface Window {
    jQuery: typeof $;
    Typed: any;
  }
}

window.jQuery = $;

const Home: React.FC = () => {
  
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

  return (
    <>
      <Header />

      <main>
        <section className="hero-section">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-sm-11">
                <h1 data-aos="fade-up" data-aos-duration="1500">
                  Designed for Your <div className="type-wrap text-yellow underline fw-800">
                    <span id="typed" style={{ whiteSpace: "pre" }} className="typed"></span>
                  </div> <br />Built for Your Comfort.
                </h1>
                <p className="text-lg" data-aos="fade-up" data-aos-duration="1500">
                  Handcrafted Furniture That Blends Style & Functionality
                </p>
                <div className="hero-banner-img mt-4 mt-sm-5" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="dotted bounce-1" data-aos="fade-up-right" data-aos-duration="3000"></div>
                  <img className="hero-img" src={heroImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pe-md-5 order-2 order-lg-1" data-aos="fade-up" data-aos-duration="1500">
                <div className="about-section-img">
                  <div className="dotted bounce-1" data-aos="fade-up-left" data-aos-duration="3000"></div>
                  <img className="about-img1" src={aboutImg1} alt="" />
                  <img className="about-img2" src={aboutImg2} alt="" />
                  <img className="about-img3" src={aboutImg3} alt="" />
                </div>
              </div>
              <div className="col-lg-6 pt-lg-4 order-1 order-lg-2" data-aos="fade-up" data-aos-duration="1500">
                <h5 className="underline text-yellow subtitle w-f mb-3">About Us</h5>
                <h2>We help you make <br /> Modern Interior Design. </h2>
                <p>
                  We specialize in designing and crafting high-quality custom furniture, tailored to your style and needs.
                  From sofas and tables to beds and storage solutions, we create unique pieces using premium materials and
                  expert craftsmanship—all with a commitment to exceptional customer service.
                </p>
                <div className="row">
                  <div className="col-sm-4 mt-4" data-aos="fade-up">
                    <img className="about-icon" src={anySizeIcon} alt="" />
                    <h6 className="mt-3 mb-1">Any Size And Color</h6>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                  <div className="col-sm-4 mt-4" data-aos="fade-up">
                    <img className="about-icon" src={fastDeliveryIcon} alt="" />
                    <h6 className="mt-3 mb-1">Fast Delivery</h6>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                  <div className="col-sm-4 mt-4" data-aos="fade-up">
                    <img className="about-icon" src={qualityMaterialsIcon} alt="" />
                    <h6 className="mt-3 mb-1">Quality Materials</h6>
                    <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section bg-rotate" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
          <div className="container">
            <div className="text-center" data-aos="fade-up" data-aos-duration="1500">
              <div className="d-flex justify-content-center">
                <h5 className="underline text-yellow subtitle w-f mb-3">products</h5>
              </div>
              <h2>Curated Creations</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="product-card">
                    <img className="product-img" src={chairProduct} alt="" />
                    <h3>Chair</h3>
                    <div className="curve-btn-icon">
                      <button type="submit" className="btn btn-icon btn-primary">
                        <img src={rightArrowWhite} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="product-card">
                    <img className="product-img" src={bedProduct} alt="" />
                    <h3>Bed</h3>
                    <div className="curve-btn-icon">
                      <button type="submit" className="btn btn-icon btn-primary">
                        <img src={rightArrowWhite} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="product-card">
                    <img className="product-img" src={sofaProduct} alt="" />
                    <h3>Sofa</h3>
                    <div className="curve-btn-icon">
                      <button type="submit" className="btn btn-icon btn-primary">
                        <img src={rightArrowWhite} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="product-card">
                    <img className="product-img" src={tableProduct} alt="" />
                    <h3>Table</h3>
                    <div className="curve-btn-icon">
                      <button type="submit" className="btn btn-icon btn-primary">
                        <img src={rightArrowWhite} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="product-card">
                    <img className="product-img" src={diningTableProduct} alt="" />
                    <h3>Dining Table</h3>
                    <div className="curve-btn-icon">
                      <button type="submit" className="btn btn-icon btn-primary">
                        <img src={rightArrowWhite} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="product-card">
                    <img className="product-img" src={officeDeskProduct} alt="" />
                    <h3>Office Desk</h3>
                    <div className="curve-btn-icon">
                      <button type="submit" className="btn btn-icon btn-primary">
                        <img src={rightArrowWhite} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-lg-4" data-aos="fade-up" data-aos-duration="1500">
                <h5 className="underline text-yellow subtitle w-f mb-3">Contact Us</h5>
                <h2 className="mb-4">Let's Connect!</h2>
                <form>
                  <div className="form-group mb-4">
                    <label htmlFor="FullName" className="form-label mb-1">Full Name</label>
                    <input type="text" className="form-control" id="FullName" aria-describedby="Name Help"
                      placeholder="Enter Full Name" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="Email" className="form-label mb-1">Email</label>
                    <input type="email" className="form-control" id="Email" placeholder="Enter Email" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="Phone" className="form-label mb-1">Phone</label>
                    <input type="text" className="form-control" id="Phone" placeholder="Enter Phone" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label mb-1">The Purpose Of The Appeal?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"
                      placeholder="Enter The Purpose Of The Appeal?" rows={3}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send<span><img src={rightArrowImage} alt="" /></span>
                  </button>
                </form>
              </div>
              <div className="col-md-6 ps-lg-5 mt-5 mt-md-0" data-aos="fade-up" data-aos-duration="1500">
                <div className="subscribe-card">
                  <div className="dotted bounce-1"></div>
                  <h2>Subscribe to newsletter <br />and grab <span className="text-yellow underline fw-800">30% OFF</span></h2>
                  <div className="input-group-subscribe">
                    <input type="text" className="form-control" placeholder="Enter your password here.." aria-label="Password"
                      aria-describedby="basic-addon1" />
                    <div className="btn-subscribe">
                      <button type="submit" className="btn btn-icon btn-yellow">
                        <img src={rightArrowImage} alt="" />
                      </button>
                    </div>
                  </div>
                  <img className="subscribe-img" src={subscribeImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 order-3 order-lg-1 mt-3 mt-lg-0 text-center text-lg-start">
              <p>© <a href="#" className="text-white">furnovate.com</a> 2025 | All Rights Reserved.</p>
            </div>
            <div className="col-lg-2 order-1 order-lg-2 d-flex justify-content-center">
              <a className="logo-icon" href="#">
                <img src={logoIcon} alt="Logo" />
              </a>
            </div>
            <div className="col-lg-5 order-2 order-lg-2 mt-3 mt-lg-0 text-lg-end text-center">
              <p>
                <a href="#" className="text-white">Privacy Policy</a> | <a href="#" className="text-white">Cookies Policy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home; 