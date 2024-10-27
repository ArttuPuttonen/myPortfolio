import React from 'react';
import Title from '../layouts/Title';
import {hand_shake} from '../../assets/index';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return(
        <section id='contact' className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
        <Title title="Contact information"
        des="Contact me"/> 
        </div>
        <div className="w-full">
            <div className="w-full h-auto flex justify-between">
                <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                    <img
                     className="w-full h-46 object-cover rounded-lg mb-2"
                     src={hand_shake} alt="contactImg"/>
                     <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-white">Arttu Puttonen</h3>
                        <p className="text-lg font-normal text-gray-400">
                            Student and Freelancer
                        </p>
                        <p className="text-base text-gray-400 tracking-wide">
                            I am a student and freelancer from Finland. I am currently studying in the field of IT and I am looking for new opportunities to work in the field of IT.
                        </p>
                        <p className="text-base text-gray-400 flex items-center gap-2">
                            Phone: <span className="text-lightText">+358 45 8445 940</span>
                        </p>
                        <p className="text-base text-gray-400 flex items-center gap-2">
                            Email: <span className="text-lightText">arskaputtonen@gmail.com</span>
                        </p>
                     </div>
                     <div className="flex flex-col">
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            Find me on
                        </h2>
                        <div className="flex gap-4">
                <span className="bannerIcon">
                    <FaFacebookF />
                </span>
                <span className="bannerIcon">
                    <FaInstagram />
                </span>
                <span className="bannerIcon">
                    <FaLinkedin />
                </span>
                <span className="bannerIcon">
                    <FaGithub />
                </span>
            </div>
                     </div>
                </div>


                <div className="w-[60%] h-full flex flex-col justify-between">

                </div>
            </div>
        </div>
        </section>
    )
}

export default Contact;