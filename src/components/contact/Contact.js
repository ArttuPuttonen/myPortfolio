import React, {useState} from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';


const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");


  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Name is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
    return(
        <section id='contact' className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
        <Title title="Contact information"
        des="Contact me"/> 
        </div>
        <div className="w-full">
            <div className="w-full h-auto flex justify-between">
                <ContactLeft />


                <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#2327b]
                flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
                    <form className="w-full flex flex-col gap-6 py-2">
                        <div className="w-full flex gap-10">
                            <div className="w-1/2 flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">YOUR NAME</p>
                            <input onChange={(e)=>setUsername(e.target.value)}  className="contactInput" 
                            type="text"/>
                            </div>
                            <div className="w-1/2 flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">Phone number</p>
                            <input className="contactInput" 
                            type="text"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                            <input className="contactInput" 
                            type="email"/>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                            <input className="contactInput" 
                            type="text"/>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                            <textarea className="contactTextArea" cols="30" rows="8"></textarea>
                        </div>
                        <div w-full>
                            <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400
                            tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor
                            border-transparent">
                                Send Message
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Contact;