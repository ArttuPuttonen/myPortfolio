import React from 'react';
import Title from '../layouts/Title';
import Education from './Education';

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
        <Education />
        </section>
    );
}

export default Resume;

