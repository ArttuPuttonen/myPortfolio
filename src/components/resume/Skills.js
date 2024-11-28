import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 items-stretch"
        >
            {/* Design Skills Section */}
            <div className="w-full lgl:w-1/2 flex flex-col justify-between">
                <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Design Skills</h2>
                </div>
                <div className="mt-10 flex-grow w-full flex flex-col gap-6">
                    {[
                        { skill: "Photography", percentage: "100" },
                        { skill: "Editing", percentage: "90" },
                        { skill: "Graphic Design", percentage: "85" },
                        { skill: "Video Production", percentage: "80" },
                        { skill: "Web Design", percentage: "75" },
                        { skill: "Illustration", percentage: "70" },
                    ].map((item, index) => (
                        <div key={index} className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">{item.skill}</p>
                            <span className="w-full h-2 bg-opacity-50 bg-black inline-flex rounded-md mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    style={{ width: `${item.percentage}%` }}
                                    className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0 text-sm text-white">
                                        {item.percentage}%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Section */}
            <div className="w-full lgl:w-1/2 flex flex-col justify-between">
                <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Skills and Certifications</h2>
                </div>
                <div className="mt-10 flex-grow w-full grid grid-cols-2 gap-6">
                    {[
                        { name: "Hygiene Passport", status: "Achieved", icon: <FaCheckCircle className="text-green-500 text-xl" /> },
                        { name: "First Aid Certificate", status: "Pending", icon: <FaTimesCircle className="text-red-500 text-xl" /> },
                        { name: "Driving License", status: "Achieved", icon: <FaCheckCircle className="text-green-500 text-xl" /> },
                        { name: "Security Training", status: "Pending", icon: <FaTimesCircle className="text-red-500 text-xl" /> },
                        { name: "Leadership Training", status: "Achieved", icon: <FaCheckCircle className="text-green-500 text-xl" /> },
                        { name: "Advanced Excel Skills", status: "Achieved", icon: <FaCheckCircle className="text-green-500 text-xl" /> },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-blue-600 to-pink-500 p-4 rounded-md shadow-lg flex items-center justify-between"
                        >
                            <div>
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-gray-300">{item.status}</p>
                            </div>
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
