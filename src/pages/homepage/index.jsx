import React from "react";
import DarkTheme from "../../layouts/Dark";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import Services5 from "../../components/Services5/services5";
import Portfolios from "../../components/Portfolios";
import AboutUs from "../../components/About-us";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import SContactForm from "../../components/s-contact-form/s-contact-form";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <FreelancreIntro />
      <Services5 />
      <Portfolios />
      {/* <AboutUs /> */}
      {/* <FullTestimonials showHead /> */}
      <SContactForm noLine />
    </DarkTheme>
  );
};

export default Homepage;
