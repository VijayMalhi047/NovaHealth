import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        At NovaHealth, we are committed to revolutionizing healthcare by providing innovative, patient-centric solutions. Our mission is to empower individuals to take control of their health and wellness journey through cutting-edge technology, expert care, and compassionate support. We believe in a holistic approach to health, combining advanced medical practices with personalized treatment plans tailored to each patient’s unique needs.
        </p>
        <p className="text-justify lg:text-start">
        Our team of dedicated healthcare professionals and specialists work collaboratively to ensure the highest standards of care, leveraging the latest in medical technology and research. From preventive care and chronic disease management to wellness programs and telemedicine services, NovaHealth is your trusted partner in achieving a vibrant, healthy life.
        </p>
        <p className="text-justify lg:text-start">
        Experience a new standard of healthcare with NovaHealth, where your well-being is our priority.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
