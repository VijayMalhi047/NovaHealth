import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
        Join us as your trusted partner in health and wellness, providing expert insights and innovative solutions to help you make informed decisions and lead a vibrant, healthy life.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
