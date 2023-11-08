import React from 'react';
import image1 from '../../assets/Capture11.JPG'

const Projects = () => {
    return (
        <div className='h-[100vh] bg-[#171327]'>
            <div>
                <div>
                    <h1 className='text-5xl font-bold py-10 flex text-fuchsia-600  justify-center'>PROJECTS</h1>
                </div>
                <div>
                   <div >
                    <img className='h-[150px] w-[200px]' src={image1} alt="" />
                   </div>
                   <div>
                    <img src="" alt="" />
                   </div>
                   <div>
                    <img src="" alt="" />
                   </div>
                   <div>
                    <img src="" alt="" />
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;