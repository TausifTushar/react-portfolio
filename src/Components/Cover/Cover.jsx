import image1 from "../../assets/young-bearded-man-with-striped-shirt_273609-5677.avif";
import React, { useEffect } from "react";
 import { BsFacebook,BsGithub,BsInstagram,BsTwitter } from 'react-icons/bs';
 import AOS from 'aos';
 import 'aos/dist/aos.css';
import { TypeAnimation } from "react-type-animation";
const Cover = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
        });
      }, []);
      
  return (
    <div className="">
      <div className=" flex justify-center items-center gap-52 text-white h-[90vh] bg-[#171327]">
        <div data-aos="fade-right">
          <h1 className=" font-bold text-5xl py-10">
            WELCOME TO <span className=" text-fuchsia-600">MY WEBSITE</span>
          </h1>
          <p className="text-3xl font-semibold">
            HI, I AM TAUSIF AHMED
            <br />
           <span className=" text-fuchsia-600">
               
             <TypeAnimation
  sequence={[
    'FRONTEND',
    500,
    'FRONTEND DEVELOPER', //  Continuing previous Text
    500,
    'FRONTEND DEVELOPER &',
    500,
    'FRONTEND DEVELOPER & QA',
    500,
    'FRONTEND DEVELOPER & QA ENGINEER',
    500,
    '',
    500,
  ]}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
             
             </span>
          </p>
          <div className="flex gap-5 mt-7">
        <h3 data-aos="fade-down" className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:drop-shadow-2xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsFacebook className="" /></h3>
        <h3 data-aos="fade-up" className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:shadow-3xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsGithub className="" /></h3>
        <h3 data-aos="fade-down" className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:shadow-3xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsInstagram className="" /></h3>
        <h3 data-aos="fade-up" className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:shadow-3xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsTwitter className="" /></h3>
      </div>
        </div>
        <div data-aos="fade-left" className="w-[400px] h-[400px] flex">
          <img className=" shadow-custom rounded-[1500px]" src={image1} alt="" />
        </div>
      </div>

      
    </div>
  );
};

export default Cover;


