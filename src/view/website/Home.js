import React, { useEffect, useState } from "react";
// import Banner1 from "../../theme_front/assets/image/banner1.png";
// import Banner2 from "../../theme_front/assets/image/banner2.jpg";
// import About from "../../theme_front/assets/image/about.png";
import Service1 from "../../theme_front/assets/image/service1.png";
import Service2 from "../../theme_front/assets/image/service2.png";
import Product from "../../theme_front/assets/image/product.png";
import Carousel from "react-bootstrap/Carousel";
import "../../theme_front/assets/css/styles_front.css";
import Fade from "react-reveal/Fade";

import Shape from "../../theme_front/assets/image/shape.png";
import Location from "../../theme_front/assets/image/location.png";
import Email from "../../theme_front/assets/image/email.png";
import Phone from "../../theme_front/assets/image/phone.png";

import axios from "axios";
import ReactLoading from "react-loading";
import env from "react-dotenv";

export default function Home() {
  const [spinner, setSpinner] = useState(true);

  const [banner, setBanner] = useState([]);
  const [abouts, setAbout] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchBanner();
    fetchaboutus();
    fetchServices();
  }, []);

  const fetchBanner = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}api/banner`)
      .then(({ data }) => {
        setSpinner(false);
        setBanner(data);
      });
  };
  const fetchaboutus = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}api/about`)
      .then(({ data }) => {
        setSpinner(false);
        setAbout(data);
      });
  };
  const fetchServices = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}api/service`)
      .then(({ data }) => {
        setSpinner(false);
        setServices(data);
      });
  };

  return (
    <>
      {spinner ? (
        <div className="loading_front">
          <ReactLoading
            type={"spinningBubbles"}
            color={"#FF0000"}
            height={100}
            width={50}
          />
        </div>
      ) : (
        <div>
          {/* ----------------banner section -------------------------- */}
          <div>
            <Fade top>
              <Carousel>
                {banner.length > 0 &&
                  banner.map((bann, key) => (
                    <Carousel.Item key={key}>
                      <img
                        className="front-d-block w-100"
                        src={`${process.env.REACT_APP_BASE_URL}uploads/banners/${bann.banner_img}`}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>{bann.title}</h3>
                        <p>{bann.sub_title}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Fade>
          </div>
          {/* ----------------About section -------------------------- */}
          <div className="front_side">
            <section className="about section bd-container" id="about">
              <div className="about__container  bd-grid">
                <Fade right>
                  <div className="about__data">
                    <h2 className="section-title about__initial">
                      {abouts.title}
                    </h2>
                    <p className="about__description">{abouts.description}</p>
                    {/* <!-- <a href="#" className="button">Read More</a> --> */}
                  </div>
                </Fade>
                <Fade left>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}uploads/abouts/${abouts.about_img}`}
                    alt=""
                    className="about__img"
                  />
                </Fade>
              </div>
            </section>
          </div>
          {/* ---------------------service section ------------------- */}
          <div className="front_side">
            <section className="services section bd-container" id="services">
              <span className="section-subtitle">SERVICES</span>
              <h2 className="section-title">Our Services</h2>

              <div className="services__container  bd-grid">
                {services.length > 0 &&
                  services.map((service, key) => (
                    <div className="services__content" key={key}>
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}uploads/services/${service.service_img}`}
                        className="services__img"
                      />
                      <h3 className="services__title">{service.title}</h3>
                      <p className="services__description">
                        {service.description}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          </div>
          {/* ----------------------client section is static- --------------------------- */}
          <div className="front_side">
            <section className="clients section" id="clients">
              <span className="section-subtitle">CLIENTS</span>
              <h2 className="section-title">Meet Our Clients</h2>
              {/* <!--========== Clients with slick slider ==========--> */}
              <div className="allSliders">
                <div className="container1">
                  <p className="section-title cat_title">
                    Website Design & Deveopment
                  </p>
                  <div className="item">
                    <a>
                      <img src={Service1} />
                    </a>
                  </div>
                </div>
                <div className="container1">
                  {/* <!-- <h1>Our Popular Brand</h1> --> */}
                  <p className="section-title cat_title">
                    Online Remittance System
                  </p>

                  <div className="item">
                    <a>
                      <img src={Service2} />
                    </a>
                  </div>
                </div>
                <div className="container1">
                  {/* <!-- <h1>Our Popular Brand</h1> --> */}
                  <p className="section-title cat_title">
                    Medical Representative System
                  </p>

                  <div className="item">
                    <a>
                      <img src={Service1} />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* -------------------product section is static--------------------------------------- */}
          <div className="front_side">
            <section className="products section bd-container" id="products">
              <span className="section-subtitle">PRODUCTS</span>
              <h2 className="section-title client-slider-header">
                Our Field Of Expertise
              </h2>
              <div className="products__container  bd-grid">
                <div className="products__content">
                  <img
                    src={Service1}
                    href="Project Ma  nagement"
                    className="products__img"
                  />
                  <h3 className="products__title">
                    Website Design & Deveopment
                  </h3>
                </div>
                <div className="products__content">
                  <img
                    src={Service2}
                    href="Project Ma  nagement"
                    className="products__img"
                  />
                  <h3 className="products__title">Online Remittance System</h3>
                </div>
                <div className="products__content">
                  <img
                    src={Product}
                    href="Project Ma  nagement"
                    className="products__img"
                  />
                  <h3 className="products__title">Human Resource System</h3>
                </div>
                <div className="products__content">
                  <img
                    src={Product}
                    href="Project Ma  nagement"
                    className="products__img"
                  />
                  <h3 className="products__title">
                    Medical Representative System
                  </h3>
                </div>
              </div>
            </section>
          </div>

          {/* -----------------contact section ---------------------------- */}
          <div className="front_side">
            <section className="contact section bd-container" id="contact">
              <div className="container">
                <span className="big-circle"></span>
                <img src={Shape} className="square" alt="" />
                <div className="form">
                  <div className="contact-info">
                    <h3 className="title">Contact Us</h3>
                    {/* <!-- <p className="text">
                  Fill up the Form and our team will get back to within 24 hrs
                </p> --> */}

                    <div className="info">
                      <div className="information">
                        <img src={Location} className="icon" alt="" />
                        <p>Prasuti Marga -509, Kathmandu, Nepal</p>
                      </div>
                      <div className="information">
                        <img src={Email} className="icon" alt="" />
                        <p>info@nyatapol.com</p>
                      </div>
                      <div className="information">
                        <img src={Phone} className="icon" alt="" />
                        <p>+977-1-4102299, 4102213 ,4102239</p>
                      </div>
                    </div>

                    <div className="map-box"></div>
                  </div>

                  <div className="contact-form">
                    <span className="circle one"></span>
                    <span className="circle two"></span>

                    <form action="" method="post" autoComplete="off">
                      <h3 className="title">Message us</h3>
                      <div className="input-container">
                        <input
                          type="text"
                          name="name"
                          className="input"
                          placeholder="Full Name"
                        />
                        {/* <label >Username</label> */}
                        {/* <span>Username</span> */}
                      </div>
                      <div className="input-container">
                        <input
                          type="email"
                          name="email"
                          className="input"
                          placeholder="Email"
                        />
                        {/* <label >Email</label>
                          <span>Email</span> */}
                      </div>
                      <div className="input-container">
                        <input
                          type="tel"
                          name="phone"
                          className="input"
                          placeholder="Phone"
                        />
                        {/* <label >Phone</label>
                          <span>Phone</span> */}
                      </div>
                      <div className="input-container textarea">
                        <textarea
                          name="message"
                          className="input"
                          placeholder="Your Message"
                        ></textarea>
                        {/* <label >Message</label>
                          <span>Message</span> */}
                      </div>
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        className="btn"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
