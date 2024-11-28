import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import LanguageSkills from "./LanguageSkills";

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillsData, setSkillsData] = useState(false);
    const [languageData, setLanguageData] = useState(false);

    return (
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="Working Experience & Education" des="My Resume" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-3">
                    {/* Education and Work Experience Tab */}
                    <li
                        onClick={() => {
                            setEducationData(true);
                            setSkillsData(false);
                            setLanguageData(false);
                        }}
                        className={`${
                            educationData ? "border-designColor rounded-lg" : "border-transparent"
                        } resumeLi`}
                    >
                        Education and Work Experience
                    </li>

                    {/* Skills and Certifications Tab */}
                    <li
                        onClick={() => {
                            setEducationData(false);
                            setSkillsData(true);
                            setLanguageData(false);
                        }}
                        className={`${
                            skillsData ? "border-designColor rounded-lg" : "border-transparent"
                        } resumeLi`}
                    >
                        Skills and Certifications
                    </li>

                    {/* Language Skills Tab */}
                    <li
                        onClick={() => {
                            setEducationData(false);
                            setSkillsData(false);
                            setLanguageData(true);
                        }}
                        className={`${
                            languageData ? "border-designColor rounded-lg" : "border-transparent"
                        } resumeLi`}
                    >
                        Language Skills
                    </li>
                </ul>
            </div>
            {/* Render Sections Based on Selected Tab */}
            {educationData && <Education />}
            {skillsData && <Skills />}
            {languageData && <LanguageSkills />}
        </section>
    );
};

export default Resume;
