import React from 'react';
import Title from '../layouts/Title';
import ResumeCard from './ResumeCard';

const Resume = () => {
    return (
        <section id='resume' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            <Title title="Working Experience & Education"
            des="My Resume"/> 
            </div>
            <div>
            <ul className="w-full grid grid-cols-2">
                <li className="resumeLi">Education and Work Experience</li>
                <li className="resumeLi">Skills and Certifications </li>
            </ul>
            </div>
            <div className="py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2010 &rarr; Present</p>
                <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div className="mt-14 w-1/2 h-[1000px] border-l-[6px] border-black
            border-opacity-30 flex flex-col gap-10">
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
                <ResumeCard 
                title="Comprehensive School"
                subTitle="Martinlaakson Yhteinäiskoulu (2010 - 2019)"
                result="9.2/10"
                des="The first 9 years of Finnish comprehensive school. Comprehensive school is mandatory for everyone in Finland" />
            </div>
        </section>
    );
}

export default Resume;

