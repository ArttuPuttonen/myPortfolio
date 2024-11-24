import React from 'react';
import {FaBars, FaGraduationCap, FaBriefcase, FaCubes} from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GiMountainClimbing } from "react-icons/gi" 
import Title from '../layouts/Title';
import Card from './Card';

function Features() {
    return (
        <section id="features" className="w-full py-20 border-b-[1px] border-b-black">   
        <Title title="Features" des="What I do"/>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">


        <Card
        title="Studies"
        des="Student of information technology, majoring software engineering. 164/240 ECTS credits currently." 
        icon={<FaGraduationCap/>}
        modalContent="First and foremost I am a student. After High School first applied and got in to study automation technology in the University of Tampere.
        After a few months I realized that it was not for me, and I wanted to do something more practical. I decided to apply to Tampere University of Applied Sciences to study information technology, what was also one of the initial choices I was considering after high school.
        Luckily I got in, and I have been very satisfied with the program. I have learnt a lot about coding, databases, hardware and more during my time here."
        />


        <Card
        title="Freelancing" 
        des="I build and host custom websites with low student price. Click for more information! " 
        icon={<FaBriefcase/>}
        modalContent="I wanted to start some sort of business related to IT alongside my studies.
        I decided to start making websites for various purposes, such as portfolio websites for individuals and basic websites for businesses (barbers, restaurants, etc.).
        I offer all-in-one services, meaning that my service includes building, hosting and updating the website. The price for building website starts at 299€ + 29€/month for hosting. 
        If you are interested, you can use the contact form below or e-mail me directly."
        />


        <Card 
        title="CEO of Kuutiostore" 
        des="The CEO of an online store that sells Rubik's cubes and similar puzzles for speedsolving"
        icon={<FaCubes/>}
        modalContent=""
        />
        
        
        
        <Card 
        title="Speedcuber" 
        des="Speedcubing is a hobby in which individuals are trying to solve twisty puzzles as quickly as possible." 
        icon={<BsFillGrid3X3GapFill />}
        modalContent={
            <div>
                <p>
                    I started speedcubing late 2015 when I was 12 years old. I attended my first competition in April 2016.
                    Since then I have competed in more than 100 competitions, achieved more than 150 podiums in various events, 
                    attended World and European Championships, and organized multiple competitions.
                </p>
                <p className="mt-4">
                    You can find all my stats on my 
                <a 
                    href="https://www.worldcubeassociation.org/persons/2016PUTT01" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-designColor underline ml-1"
                >
                    World Cube Association profile
                </a>.
            </p>
        </div>
    }
/>


        <Card 
        title="Business Strategy"
        des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" 
        icon={<GiMountainClimbing/>}/>
        
        
        
        <Card title="Business Strategy" des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" icon={<FaBars/>}/>
        </div>
        </section>
    );
}

export default Features;
