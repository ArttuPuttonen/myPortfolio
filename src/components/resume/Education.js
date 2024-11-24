import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
    return (
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} 
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
            <div className="flex-1">
            <div className="lgl:py-12 py-6 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2010 &rarr; Present</p>
                <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-black
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                title="University of Applied Sciences"
                subTitle="Tampere University of Applied Sciences (2023-->)"
                result="3,45/5 (current)"
                des="I am currently studying Information and Communication Technology in Tampere University of Applied Sciences.
                So far I have gained knowledge in programming, databases, web development and more. I have 164/240 ECTS credits."/>
                <ResumeCard 
                title="University"
                subTitle="Tampere University (2022-2023)"
                result="- / -"
                des="I studied Automation Technology for 1 year. After the first year I realized that I am more into IT, and decided to change my field of studies."/>
                <ResumeCard 
                title="High School"
                subTitle="Tikkurilan Lukio (2019-2022)"
                result="8,05/10"
                des="Finnish High School, also known as Upper Secondary School."/>
                <ResumeCard 
                title="Comprehensive School"
                subTitle="Martinlaakson Yhteinäiskoulu (2010 - 2019)"
                result="9.2/10"
                des="The first 9 years of Finnish school system. Comprehensive school is mandatory for everyone in Finland" />
            </div>
            </div>


{/* 
            Working experience             
*/}


            <div className="flex-1">
            <div className="lgl:py-12 py-6 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2020 &rarr; Present</p>
                <h2 className="text-3xl md:text-4xl font-bold">Working Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-black
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard
                title="Kuutiostore Oy"
                subTitle="Chief Executive Officer (2022-->)"
                result="Finland"
                des="E-commerce website of Rubik's Cubes and similar puzzles mainly for speedsolving. I started the company with my friend, and we have about 20 years of speedcubing experience in total."
                />
                <ResumeCard 
                title="VM-karting center Vantaa"
                subTitle="Race Track Worker (2/2022-->7/2022)"
                result="Vantaa"
                des="Karting hall customer service. My duties included giving driving instructions, supervising the drives and running group events."/>
                <ResumeCard 
                title="Formula Center Helsinki"
                subTitle="Race Track Worker (6/2021-->2/2022)"
                result="Helsinki"
                des="Karting hall customer service. My duties included fixing cars, giving driving instructions, supervising the drives and running group events. "
                />
                <ResumeCard 
                title="Helsingin Jäätelötehdas"
                subTitle="Ice cream stand worker (5/2020-->8/2020)"
                result="Helsinki"
                des="My first proper summer job. My duties were selling ice cream, and keeping the ice cream stand clean" />
            </div>
            </div>
            </motion.div>
    );
}

export default Education;