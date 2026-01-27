import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 items-stretch"
        >
            {/* Skills Section */}
            <div className="w-full lgl:w-1/2 flex flex-col justify-between">
                <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
                </div>

                <div className="mt-10 flex-grow w-full flex flex-col gap-8">
                    {/* Languages */}
                    <div>
                        <h3 className="text-lg text-designColor mb-2 font-semibold uppercase">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {["JavaScript", "Python", "HTML", "CSS", "C++ (basics)"].map((lang, i) => (
                                <span
                                    key={i}
                                    className="bg-[#1e2024] text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div>
                        <h3 className="text-lg text-designColor mb-2 font-semibold uppercase">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {["MySQL", "MongoDB", "SQLite", "MySQL Workbench", "phpMyAdmin"].map((db, i) => (
                                <span
                                    key={i}
                                    className="bg-[#1e2024] text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600"
                                >
                                    {db}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div>
                        <h3 className="text-lg text-designColor mb-2 font-semibold uppercase">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Git & GitHub",
                                "MacOS",
                                "React",
                                "Node.js",
                                "Tailwind CSS",
                                "Bootstrap",
                                "Next.js",
                                "Express",
                                "PlatformIO",
                                "Chrome DevTools",
                                "Visual Studio Code",
                                "Postman",
                                "ChatGPT",
                                "Github Copilot",
                            ].map((tool, i) => (
                                <span
                                    key={i}
                                    className="bg-[#1e2024] text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-600"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="w-full lgl:w-1/2 flex flex-col justify-between">
                <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
                </div>

                <div className="mt-10 flex-grow w-full grid grid-cols-2 gap-6">
                    {[
                        {
                            name: "Hygiene Passport",
                            status: "Achieved",
                            icon: <FaCheckCircle className="text-green-500 text-xl" />,
                        },
                        {
                            name: "First Aid Certificate",
                            status: "Pending",
                            icon: <FaTimesCircle className="text-red-500 text-xl" />,
                        },
                        {
                            name: "Driving License",
                            status: "Achieved",
                            icon: <FaCheckCircle className="text-green-500 text-xl" />,
                        },
                        {
                            name: "Security Training",
                            status: "Pending",
                            icon: <FaTimesCircle className="text-red-500 text-xl" />,
                        },
                        {
                            name: "Leadership Training",
                            status: "Pending",
                            icon: <FaTimesCircle className="text-red-500 text-xl" />,
                        },
                        {
                            name: "Hot Work License",
                            status: "Pending",
                            icon: <FaTimesCircle className="text-red-500 text-xl" />,
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-blue-600 to-pink-500 p-4 rounded-md shadow-lg flex items-center justify-between"
                        >
                            <div>
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-gray-300">{item.status}</p>
                            </div>
                            <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-md">
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
