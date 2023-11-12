import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
        });
      }, []);
    return (
        <div className='h-[100vh] bg-[#171327]'>
            <h1  data-aos="fade-right" className='text-5xl font-bold py-10 flex text-fuchsia-600 bg-[#171327] justify-center'>SERVICES</h1>
            <div className='flex justify-center gap-5 mt-10'>
                <div data-aos="fade-up" className='h-[150px] w-[150px] border-2 shadow-ccustom border-fuchsia-600 flex justify-center items-center text-center rounded-tl-3xl rounded-br-3xl'>
                    <p className='text-fuchsia-600 text-lg font-bold'>HTML5</p>
                </div>
                <div data-aos="fade-down" className='h-[150px] w-[150px] border-2 shadow-ccustom border-fuchsia-600 flex justify-center items-center text-center rounded-tl-3xl rounded-br-3xl'>
                    <p className='text-fuchsia-600 text-lg font-bold'>CSS3</p>
                </div>
                <div data-aos="fade-up" className='h-[150px] w-[150px] border-2  shadow-ccustom border-fuchsia-600 flex justify-center items-center text-center rounded-tl-3xl rounded-br-3xl'>
                    <p className='text-fuchsia-600 text-lg font-bold'>JAVASCRIPT</p>
                </div>
                <div data-aos="fade-down" className='h-[150px] w-[150px] border-2 shadow-ccustom border-fuchsia-600 flex justify-center items-center text-center rounded-tl-3xl rounded-br-3xl'>
                    <p className='text-fuchsia-600 text-lg font-bold'>REACT</p>
                </div>
                <div data-aos="fade-up" className='h-[150px] w-[150px] border-2 shadow-ccustom border-fuchsia-600 flex justify-center items-center text-center rounded-tl-3xl rounded-br-3xl'>
                    <p className='text-fuchsia-600 text-lg font-bold'>SQA</p>
                </div>
            </div>
        </div>
    );
};

export default Services;