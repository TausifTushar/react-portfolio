/* eslint-disable react/no-unknown-property */
import React ,{ useRef }  from "react";
import emailjs from '@emailjs/browser';
const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t8dyuam', 'template_c41qx8f', form.current, 'zC-lnXjacWC47Olyi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="h-[100vh] w-full bg-[#171327] flex justify-center">
      {/* <form>
                <p classNameName='text-white flex justify-center text-3xl font-bold mb-8'>Contact Us</p>
                <input classNameName='w-[400px] shadow-ccustom border-2 border-fuchsia-600' type="text" name="" id="" />
                <br />
                <input classNameName='w-[400px] shadow-ccustom mt-5 border-2 border-fuchsia-600' type="email" name="" id="" />
                <br />
                <input classNameName='w-[400px] shadow-ccustom h-[100px] border-2 mt-5 border-fuchsia-600' type="text" name="" id="" />
                <br />
                <div classNameName='flex justify-center mt-5'>
                <input  type="submit" value="SEND" classNameName='shadow-ccustom shadow-box py-3 px-5 text-2xl rounded-lg text-center bg-fuchsia-600 text-white' />
                </div>
            </form> */}
      
        <section className="w-[600px] ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-fuchsia-600">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-fuchsia-600 dark:text-fuchsia-600 sm:text-xl"></p>
            <form action="#" ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" shadow-sm border-2  bg-gray-50 border-fuchsia-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-fuchsia-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-fuchsia-600 dark:shadow-ccustom"
                  placeholder="name@abc.com"
                  name="user_email"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-fuchsia-600 shadow-sm focus:ring-primary-500 focus:border-fuchsia-600 dark:bg-gray-700 dark:border-fuchsia-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-ccustom"
                  placeholder="Name"
                  name="user_name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border-2 border-fuchsia-600 focus:ring-primary-500 focus:border-fuchsia-600 dark:bg-gray-700 dark:border-fuchsia-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-ccustom"
                  placeholder="Leave a comment..."
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      
    </div>
  );
};

export default ContactUs;
