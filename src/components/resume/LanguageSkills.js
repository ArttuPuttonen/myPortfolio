import React from "react";
import { motion } from "framer-motion";

const LanguageSkills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full mt-14 flex flex-col lgl:flex-row items-center gap-10"
        >
            {/* Text Box for Description */}
            <div className="lgl:w-1/3 flex-shrink-0 flex flex-col justify-center">
                <div className="font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Language Skills</h2>
                </div>
                <div className="text-gray-400 text-base leading-6 mt-4">
                    <p>
                        These language ratings are based on the{" "}
                        <strong className="text-designColor">CEFR</strong> framework
                        (Common European Framework of Reference for Languages), which categorizes
                        proficiency levels from A1 (Beginner) to C2 (Mastery).
                    </p>
                    <p className="mt-4">
                        Finnish is my native language. I have a{" "}
                        <strong className="text-designColor">C1</strong> level in English, and
                        I’m currently at <strong className="text-designColor">A2</strong> level
                        in Spanish. I am working on improving my Spanish and aim to reach B1.
                    </p>
                </div>
            </div>

            {/* Language Skills Progress Bars */}
            <div className="lgl:w-2/3 w-full">
                <div className="w-full flex flex-col gap-6">
                    {[
                        { language: "Finnish", level: "Native", percentage: "100" },
                        { language: "English", level: "C1", percentage: "85" },
                        { language: "Spanish", level: "A2", percentage: "40" },
                    ].map((item, index) => (
                        <div key={index} className="overflow-x-hidden">
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm uppercase font-medium">
                                    {item.language} - {item.level}
                                </p>
                                <p className="text-sm font-semibold text-white">{item.percentage}%</p>
                            </div>
                            <div className="relative w-full h-2 bg-opacity-50 bg-black rounded-md">
                                <motion.div
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    style={{ width: `${item.percentage}%` }}
                                    className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LanguageSkills;
