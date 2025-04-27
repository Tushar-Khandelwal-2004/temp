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

const HomeHebrew: React.FC = () => {
  
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

  return (
    <>
      <Header />

      <main>
        <section className="hero-section">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-sm-11">
                <h1 data-aos="fade-up" data-aos-duration="1500">
                  עוצב עבורך<div className="type-wrap text-yellow underline fw-800">
                    <span id="typed" style={{ whiteSpace: "pre" }} className="typed"></span>
                  </div> <br />נבנה לנוחות שלך.
                </h1>
                <p className="text-lg" data-aos="fade-up" data-aos-duration="1500">
                  ריהוט בעבודת יד המשלב סגנון ופונקציונליות
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
                <h5 className="underline text-yellow subtitle w-f mb-3">אודותינו</h5>
                <h2>אנו עוזרים לך לעשות עיצוב פנים מודרני. </h2>
                <p>
                  אנו מתמחים בעיצוב ויצירת רהיטים איכותיים בהתאמה אישית, המותאמים לסגנון ולצרכים שלכם. מספות ושולחנות ועד מיטות ופתרונות אחסון, אנו יוצרים פריטים ייחודיים תוך שימוש בחומרי פרימיום ואומנות מומחית - הכל תוך מחויבות לשירות לקוחות יוצא דופן.
                </p>
                <div className="row">
                  <div className="col-sm-4 mt-4" data-aos="fade-up">
                    <img className="about-icon" src={anySizeIcon} alt="" />
                    <h6 className="mt-3 mb-1">כל גודל וצבע</h6>
                    <p className="text-sm">לורם איפסום הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה. </p>
                  </div>
                  <div className="col-sm-4 mt-4" data-aos="fade-up">
                    <img className="about-icon" src={fastDeliveryIcon} alt="" />
                    <h6 className="mt-3 mb-1">משלוח מהיר</h6>
                    <p className="text-sm">לורם איפסום הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.</p>
                  </div>
                  <div className="col-sm-4 mt-4" data-aos="fade-up">
                    <img className="about-icon" src={qualityMaterialsIcon} alt="" />
                    <h6 className="mt-3 mb-1">חומרים איכותיים</h6>
                    <p className="text-sm">לורם איפסום הוא פשוט טקסט דמה של תעשיית הדפוס והקביעה.</p>
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
                <h5 className="underline text-yellow subtitle w-f mb-3">מוצרים</h5>
              </div>
              <h2>יצירות אוצרות</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6" data-aos="zoom-in-up" data-aos-duration="1500">
                  <div className="product-card">
                    <img className="product-img" src={chairProduct} alt="" />
                    <h3>כִּסֵא</h3>
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
                    <h3>מיטה</h3>
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
                    <h3>סַפָּה</h3>
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
                    <h3>לוּחַ</h3>
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
                    <h3>שולחן אוכל</h3>
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
                    <h3>שולחן משרדי</h3>
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
                <h5 className="underline text-yellow subtitle w-f mb-3">צור קשר</h5>
                <h2 className="mb-4">בואו להתחבר!</h2>
                <form>
                  <div className="form-group mb-4">
                    <label htmlFor="FullName" className="form-label mb-1">שם מלא</label>
                    <input type="text" className="form-control" id="FullName" aria-describedby="Name Help"
                      placeholder="הזן שם מלא" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="Email" className="form-label mb-1">אֶלֶקטרוֹנִי</label>
                    <input type="email" className="form-control" id="Email" placeholder="הזן אימייל" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="Phone" className="form-label mb-1">טֵלֵפוֹן</label>
                    <input type="text" className="form-control" id="Phone" placeholder="הזן טלפון" />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label mb-1">מטרת הערעור?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"
                      placeholder="להיכנס למטרת הערעור?" rows={3}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    לִשְׁלוֹחַ<span><img src={rightArrowImage} alt="" /></span>
                  </button>
                </form>
              </div>
              <div className="col-md-6 ps-lg-5 mt-5 mt-md-0" data-aos="fade-up" data-aos-duration="1500">
                <div className="subscribe-card">
                  <div className="dotted bounce-1"></div>
                  <h2>הירשמו לניוזלטר <br /> וקבלו <span className="text-yellow underline fw-800"> 30% הנחה</span></h2>
                  <div className="input-group-subscribe">
                    <input type="text" className="form-control" placeholder="הזן את הסיסמה שלך כאן .." aria-label="Password"
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
              <p>© <a href="#" className="text-white">furnovate.com</a> 2025 | כֹּל הַזְכוּיוֹת שְׁמוּרוֹת.</p>
            </div>
            <div className="col-lg-2 order-1 order-lg-2 d-flex justify-content-center">
              <a className="logo-icon" href="#">
                <img src={logoIcon} alt="Logo" />
              </a>
            </div>
            <div className="col-lg-5 order-2 order-lg-2 mt-3 mt-lg-0 text-lg-end text-center">
              <p>
                <a href="#" className="text-white">מדיניות פרטיות</a> | <a href="#" className="text-white">מדיניות העוגיות</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeHebrew; 