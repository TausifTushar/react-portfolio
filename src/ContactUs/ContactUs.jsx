import React from 'react';

const ContactUs = () => {
    return (
        <div className='h-[100vh] w-full bg-[#171327] flex justify-center'>
            <form>
                <p className='text-white flex justify-center text-3xl font-bold mb-8'>Contact Us</p>
                <input className='w-[400px] shadow-ccustom border-2 border-fuchsia-600' type="text" name="" id="" />
                <br />
                <input className='w-[400px] shadow-ccustom mt-5 border-2 border-fuchsia-600' type="email" name="" id="" />
                <br />
                <input className='w-[400px] shadow-ccustom h-[100px] border-2 mt-5 border-fuchsia-600' type="text" name="" id="" />
                <br />
                <div className='flex justify-center mt-5'>
                <input  type="submit" value="SEND" className='shadow-ccustom shadow-box py-3 px-5 text-2xl rounded-lg text-center bg-fuchsia-600 text-white' />
                </div>
            </form>
        </div>
    );
};

export default ContactUs;