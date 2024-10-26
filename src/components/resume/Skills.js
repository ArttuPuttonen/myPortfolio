import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <div>
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="w-full flex gap-20">
            <div className="w-1/2">
            <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="text-4xl font-bold">Design Skills</h2>
            </div>
            <div className="w-full mt-14 flex flex-col gap-6">
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Photography</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}}
                        className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">100%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Editing</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Photography</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}}
                        className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">100%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Editing</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Editing</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
            
            </div>
            </div>





            <div className="w-1/2">
            <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="text-4xl font-bold">Design Skills</h2>
            </div>
            <div className="w-full mt-14 flex flex-col gap-6">
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Photography</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}}
                        className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">100%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Editing</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Photography</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}}
                        className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">100%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Editing</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="overflow-x-hidden">
                    <p className="text-sm uppercase font-medium">Editing</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                        <motion.span
                        initial={{x:"-100%", opacity:0}}
                        animate={{x:0, opacity:1,}}
                        transition={{duration: 0.5, delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
            
            </div>
            </div>
            </motion.div>
        </div>
    );
}

export default Skills;
