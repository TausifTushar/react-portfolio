import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div className='py-8 bg-red-950 px-16'>
            <nav className='flex justify-between'>
                <div>
                  <p className=' font-bold text-2xl text-white'>Tausif Tushar</p>
                </div>
                <div className='flex'>
               <Link> <li className=' text-white list-none mr-4 font-semibold text-lg  hover:border-b-2 hover:border-fuchsia-600 hover:text-fuchsia-600 transition cursor-pointer'>HOME</li></Link>
                <li className=' text-white list-none mr-4 font-semibold text-lg  hover:border-b-2 hover:border-fuchsia-600 hover:text-fuchsia-600 transition cursor-pointer'>ABOUT</li>
                <li className=' text-white list-none mr-4 font-semibold text-lg  hover:border-b-2 hover:border-fuchsia-600 hover:text-fuchsia-600 transition cursor-pointer'>SKILL</li>
                <li className=' text-white list-none mr-4 font-semibold text-lg  hover:border-b-2 hover:border-fuchsia-600 hover:text-fuchsia-600 transition cursor-pointer'>PORTFOLIO</li>
                <li className=' text-white list-none mr-4 font-semibold text-lg  hover:border-b-2 hover:border-fuchsia-600 hover:text-fuchsia-600 transition cursor-pointer'>CONTACT</li>
                </div>
            </nav>
            
        </div>
        <hr></hr>
        </div>
    );
};

export default Navbar;
