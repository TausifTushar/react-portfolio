import React, { useEffect } from "react";
import image1 from '../../assets/cover-photo.jpg'
import cv from '../../assets/Tausif-ahmed (2).pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
        });
      }, []);
  return (
    <div id="about" className="h-[100vh]">
       <div className="flex justify-center items-center gap-40 py-40 h-[100vh] bg-[#171327]">
      <div className="h-[300px] w-[300px] flex justify-center">
        <img src={image1} alt="" />
      </div>
      <div className="">
        <h1 data-aos="fade-right" className="text-5xl  text-white font-abold">ABOUT ME</h1>
        <p data-aos="fade-left" className=" w-[600px] text-white mt-6">
        Hello there! I'm Tausif Ahmed, a passionate React developer and seasoned Software Quality Assurance (SQA) 
        engineer. With a keen eye for detail and a love for building user-friendly interfaces, 
        I bring a unique blend of development and testing expertise to the digital landscape.
        I'm always open to new opportunities and exciting challenges!
        Thanks for stopping by, and I look forward to the possibility of working together.
        </p>
        
        <a href={cv} download="Tausif-ahmed">
        <button data-aos="zoom-in" className="text-white p-4 border-2 border-white rounded-lg mt-5">RESUME</button>
        </a>
      </div>
    </div>
    </div>
   
  );
};

export default AboutMe;
