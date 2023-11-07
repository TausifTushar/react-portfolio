import React, { useEffect } from "react";
import image1 from '../../assets/young-bearded-man-with-striped-shirt_273609-5677.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
          duration: 10000, // Animation duration in milliseconds
        });
      }, []);
  return (
    <div className="flex justify-center gap-60 py-40 bg-[#171327]">
      <div className="h-[300px] w-[300px]">
        <img src={image1} alt="" />
      </div>
      <div className="">
        <h1 data-aos="fade-right" className="text-5xl  text-white font-abold">ABOUT ME</h1>
        <p data-aos="fade-left" className=" text-white mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          praesentium autem itaque fugiat,
          <br />
          dignissimos pariatur ducimus voluptate, iure cupiditate nihil
          molestias magnam minima temporibus <br />
          tempora corporis. Illo quaerat enim porro.
        </p>
        
        <button data-aos="zoom-in" className="text-white p-4 border-2 border-white rounded-lg mt-5">RESUME</button>
      </div>
    </div>
  );
};

export default AboutMe;
