import React from 'react';
import Title from '../layouts/Title';

const Resume = () => {
    return (
        <section id='resume' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            <Title title="Working Experience & Education"
            des="My Resume"/> 
            </div>
            <ul className="w-full grid grid-cols-4">
                <li className="resumeLi">Education</li>
                <li className="resumeLi">Professional Skills</li>
                <li className="resumeLi">Work Experience</li>
                <li className="resumeLi">Achievements</li>
            </ul>
        </section>
    );
}

export default Resume;

