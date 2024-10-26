import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';


const Resume = () => {
        const [educationData, setEducationData] = useState(true);
        const [skillsData, setSkillsData] = useState(false);
    return (
        <section id='resume' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            <Title title="Working Experience & Education"
            des="My Resume"/> 
            </div>
            <div>
            <ul className="w-full grid grid-cols-2">
                <li onClick={()=> setEducationData(true) & setSkillsData(false)}  className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
                    >
                    Education and Work Experience
                    </li>


                <li onClick={()=> setEducationData(false) & setSkillsData(true)} className={`${
              skillsData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}>Skills and Certifications </li>
            </ul>
            </div>
            {educationData && <Education />}
            {skillsData && <Skills />}
        </section>
    );
}

export default Resume;

