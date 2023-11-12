import React from 'react';
import image1 from '../../assets/Capture.jpg'

const Projects = () => {
    return (
        <div className='h-[100vh] bg-[#171327]'>
            <div>
                <div>
                    <h1 className='text-5xl font-bold py-10 flex  text-fuchsia-600  justify-center'>PROJECTS</h1>
                </div>
                <div className='flex justify-center gap-8'>
                   <div data-aos="fade-down" >
                    <img className='h-[150px] w-[200px] border-4 shadow-ccustom border-fuchsia-600 rounded-lg p-1' src={image1} alt="" />
                   </div>
                   <div data-aos="fade-up">
                   <img className='h-[150px] w-[200px] border-4 shadow-ccustom border-fuchsia-600 rounded-lg p-1' src={image1} alt="" />
                   </div>
                   <div data-aos="fade-down">
                   <img className='h-[150px] w-[200px] border-4 shadow-ccustom border-fuchsia-600 rounded-lg p-1' src={image1} alt="" />
                   </div>
                   <div data-aos="fade-up">
                   <img className='h-[150px] w-[200px] border-4 shadow-ccustom border-fuchsia-600 rounded-lg p-1' src={image1} alt="" />
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;