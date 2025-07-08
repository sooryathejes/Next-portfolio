import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

        const [result, setResult] = useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "c57df45d-468b-4696-ac84-baff35c1d005");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          }); 
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
      

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-blue-50">
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'd love to hear you! If you have any questions, comments, or feedback, please use the form below. 
            </p>
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
                    <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>

                </div>
                <textarea rows='6' placeholder='Enter your message' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 w-full' name='message'></textarea>
                <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-gray-800 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer' type='submit'>Submit now <Image src={assets.right_arrow} alt='' className='w-4 '/> </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    ) 
}
export default Contact 