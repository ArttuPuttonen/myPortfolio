import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <div>
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="w-full flex gap-20">
            <div>
            <div className="mt-16 py-6 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="text-4xl font-bold">Design Skills</h2>
            </div>
            <div className="w-full h-[1000px] border-l-[6px] border-black
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
            <div className="mt-16 py-6 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="text-4xl font-bold">Development Skills</h2>
            </div>
            <div className="w-full h-[1000px] border-l-[6px] border-black
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

export default Skills;
