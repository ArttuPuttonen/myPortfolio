import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div>
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} 
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
            <div>
            <div className="lgl:py-12 py-6 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2010 &rarr; Present</p>
                <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                title="University of Applied Sciences"
                />
                <ResumeCard 
                title="University"/>
                <ResumeCard 
                title="High School"/>
                <ResumeCard 
                title="Comprehensive School"
                subTitle="Martinlaakson Yhteinäiskoulu (2010 - 2019)"
                result="9.2/10"
                des="The first 9 years of Finnish school system. Comprehensive school is mandatory for everyone in Finland" />
            </div>
            </div>


            <div>
            <div className="lgl:py-12 py-6 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2020 &rarr; Present</p>
                <h2 className="text-3xl md:text-4xl font-bold">Working Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                title="University of Applied Sciences"
                />
                <ResumeCard 
                title="University"/>
                <ResumeCard 
                title="High School"/>
                <ResumeCard 
                title="Comprehensive School"
                subTitle="Martinlaakson Yhteinäiskoulu (2010 - 2019)"
                result="9.2/10"
                des="The first 9 years of Finnish school system. Comprehensive school is mandatory for everyone in Finland" />
            </div>
            </div>
            </motion.div>
        </div>
    );
}

export default Education;