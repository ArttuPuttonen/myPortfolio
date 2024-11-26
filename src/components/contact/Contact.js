import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    // Email validation function
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    // Handle form submission
    const handleSend = (e) => {
        e.preventDefault();

        if (username === "") {
            setErrMsg("Name is required!");
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
        } else if (email === "") {
            setErrMsg("Email is required!");
        } else if (!emailValidation(email)) {
            setErrMsg("Provide a valid email!");
        } else if (subject === "") {
            setErrMsg("Subject is required!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            const templateParams = {
                from_name: username,
                phone_number: phoneNumber,
                reply_to: email,
                subject: subject,
                message: message,
            };

            emailjs
            .send(
              process.env.REACT_APP_EMAILJS_SERVICE_ID, // References your .env variable
              process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // References your .env variable
              templateParams,
              process.env.REACT_APP_EMAILJS_PUBLIC_KEY // References your .env variable
              )
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        setSuccessMsg(
                            `Thank you, ${username}. Your message has been sent successfully!`
                        );
                        setErrMsg("");
                        setUsername("");
                        setPhoneNumber("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                    },
                    (err) => {
                        console.error("FAILED...", err);
                        setErrMsg("Something went wrong. Please try again later.");
                    }
                );
        }
    };

    return (
        <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="Contact Information" des="Get in touch with me" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                    <ContactLeft />
                    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#2327b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                        <form
                            onSubmit={handleSend}
                            className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
                        >
                            {/* Error Message */}
                            {errMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">
                                    {errMsg}
                                </p>
                            )}

                            {/* Success Message */}
                            {successMsg && (
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                    {successMsg}
                                </p>
                            )}

                            {/* Form Fields */}
                            <div className="w-full flex flex-col lgl:flex-row gap-10">
                                {/* Name Field */}
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        Your Name
                                    </p>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="contactInput"
                                    />
                                </div>

                                {/* Phone Number Field */}
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                                        Phone Number
                                    </p>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="contactInput"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Email
                                </p>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="contactInput"
                                />
                            </div>

                            {/* Subject Field */}
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Subject
                                </p>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="contactInput"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">
                                    Message
                                </p>
                                <textarea
                                    cols="30"
                                    rows="8"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="contactTextArea"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="w-full">
                                <button
                                    type="submit"
                                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
