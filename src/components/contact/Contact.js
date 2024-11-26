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
    const [errMsg, setErrMsg] = useState(""); // Persistent error message
    const [successMsg, setSuccessMsg] = useState(""); // Temporary success message
    const [loading, setLoading] = useState(false); // Loading state

    // Email validation function
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    // Handle form submission
    const handleSend = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setErrMsg(""); // Clear previous error message

        if (username === "") {
            setErrMsg("Name is required!");
            setLoading(false);
            return;
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
            setLoading(false);
            return;
        } else if (email === "") {
            setErrMsg("Email is required!");
            setLoading(false);
            return;
        } else if (!emailValidation(email)) {
            setErrMsg("Provide a valid email!");
            setLoading(false);
            return;
        } else if (subject === "") {
            setErrMsg("Subject is required!");
            setLoading(false);
            return;
        } else if (message === "") {
            setErrMsg("Message is required!");
            setLoading(false);
            return;
        }

        const templateParams = {
            from_name: username,
            phone_number: phoneNumber,
            reply_to: email,
            subject: subject,
            message: message,
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setSuccessMsg(`Thank you, ${username}. Your message has been sent successfully!`);
                    setUsername("");
                    setPhoneNumber("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setErrMsg(""); // Clear any previous errors
                    setLoading(false); // Stop loading

                    // Automatically hide success message after 10 seconds
                    setTimeout(() => setSuccessMsg(""), 10000);
                },
                (err) => {
                    console.error("FAILED...", err);
                    setErrMsg("Something went wrong. Please try again later.");
                    setLoading(false); // Stop loading
                }
            );
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
                            {/* Form Fields */}
                            <div className="w-full flex flex-col lgl:flex-row gap-10">
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="contactInput"
                                    />
                                </div>
                                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="contactInput"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="contactInput"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="contactInput"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
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
                                    disabled={loading}
                                    className={`w-full h-12 bg-[#141518] rounded-lg text-base tracking-wider uppercase 
                                    ${loading ? "text-gray-500 cursor-not-allowed" : "text-gray-400 hover:text-white"} 
                                    duration-300 hover:border-[1px] hover:border-designColor border-transparent`}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            {/* Error and Success Messages */}
                            <div className="mt-4">
                                {errMsg && (
                                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base tracking-wide animate-bounce">
                                        {errMsg}
                                    </p>
                                )}
                                {successMsg && (
                                    <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                        {successMsg}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
