import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            {/* Education Section */}
            <div className="flex-1">
                <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">2010 &rarr; Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                </div>
                <div className="mt-10 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="University of Applied Sciences"
                        subTitle="Tampere University of Applied Sciences (2023-->)"
                        result="3,73/5"
                        des="I am currently studying Information and Communication Technology in Tampere University of Applied Sciences. My major is Software Engineering. 
                        So far I have gained knowledge in programming, databases, web development and more. I currently have 237/240 ECTS credits, only thesis left."
                    />
                    <ResumeCard
                        title="University"
                        subTitle="Tampere University (2022-2023)"
                        result="- / -"
                        des="I studied Automation Technology for 1 year. After the first year I realized that I am more into IT, and decided to change my field of studies."
                    />
                    <ResumeCard
                        title="High School"
                        subTitle="Tikkurilan Lukio (2019-2022)"
                        result="8,05/10"
                        des="Finnish High School, also known as Upper Secondary School."
                    />
                    <ResumeCard
                        title="Comprehensive School"
                        subTitle="Martinlaakson Yhteinäiskoulu (2010 - 2019)"
                        result="9.2/10"
                        des="The first 9 years of Finnish school system. Comprehensive school is mandatory for everyone in Finland"
                    />
                </div>
            </div>

            {/* Working Experience Section */}
            <div className="flex-1">
                <div className="py-12 pb-2 font-titleFont flex flex-col gap-2">
                    <p className="text-sm text-designColor tracking-[4px]">2020 &rarr; Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Working Experience</h2>
                </div>
                <div className="mt-10 w-full h-auto border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
                        <ResumeCard
                        title="South Tours, Málaga"
                        subTitle="Full-Stack Web Developer Intern (5/2025-->7/2025)"
                        result="Spain"
                        des="This 3-month long internship was my first touch working in the field of IT. I was working as a part of international team
                        developing and maintaining the company's internal booking and finance management system. 
                        We integrated a lot of data from different origins to the platform, and worked mostly with JavaScript and PHP."
                    />
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
                        des="Karting hall customer service. My duties included giving driving instructions, supervising the drives and running group events."
                    />
                    <ResumeCard
                        title="Formula Center Helsinki"
                        subTitle="Race Track Worker (6/2021-->2/2022)"
                        result="Helsinki"
                        des="Karting hall customer service. My duties included fixing cars, giving driving instructions, supervising the drives and running group events."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
