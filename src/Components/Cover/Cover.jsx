import image1 from "../../assets/young-bearded-man-with-striped-shirt_273609-5677.avif";
import React, { useEffect } from "react";
 import { BsFacebook,BsGithub,BsInstagram,BsTwitter } from 'react-icons/bs';
 import AOS from 'aos';
 import 'aos/dist/aos.css';
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            accusantium impedit <br />
            magnam culpa rem quae ipsa enim consequuntur animi. Animi, provident
            tenetur!
            <br /> Consequuntur eveniet eaque placeat magni saepe neque ipsam.
            Officiis sed quia <br />
            exercitationem iusto, non soluta enim aspernatur blanditiis.
          </p>
          <div className="flex gap-5 mt-7">
        <h3 className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:drop-shadow-2xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsFacebook className="" /></h3>
        <h3 className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:shadow-3xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsGithub className="" /></h3>
        <h3 className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:shadow-3xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsInstagram className="" /></h3>
        <h3 className=" hover:shadow-custom hover:border-2 hover:border-fuchsia-600 hover:shadow-3xl p-2 rounded-3xl text-fuchsia-600 text-3xl"><BsTwitter className="" /></h3>
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


