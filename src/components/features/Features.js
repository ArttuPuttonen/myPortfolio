import React from 'react';
import {FaGraduationCap, FaBriefcase, FaCubes} from 'react-icons/fa';
import { IoRocketSharp } from "react-icons/io5";
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
        modalContent="First and foremost I am a student. After High School I first applied and got in to study automation technology in the University of Tampere.
        After a few months I realized that it was not for me, and I wanted to do something more practical. I decided to apply to Tampere University of Applied Sciences to study information technology, what was also one of the initial choices I was considering after high school.
        Luckily I got in, and I have been very satisfied with the program. I have learnt a lot about coding, databases, hardware and more during my time here."
        />


        <Card
        title="Freelancing" 
        des="I build and host websites with low student price starting only at 299€ + 29€/month for hosting! " 
        icon={<FaBriefcase/>}
        modalContent="I wanted to start some sort of business related to IT alongside my studies.
        I decided to start making websites for various purposes, such as portfolio websites for individuals and basic websites for businesses (barbers, restaurants, etc.).
        I offer all-in-one services, meaning that my service includes building, hosting and updating the website. The price for building website starts at 299€ + 29€/month for hosting. 
        If you are interested, you can use the contact form below or e-mail me directly."
        />


        <Card 
        title="CEO of Kuutiostore" 
        des="The CEO of an online store that sells Rubik's cubes and similar puzzles for speedsolving!"
        icon={<FaCubes/>}
        modalContent="Together with my friend, I founded an online store for Rubik's cubes and other similar twisty puzzles made especially for competition usage.
        My tasks include maintaining our website, product photography, making YouTube instructional videos, marketing, and other tasks related to running the company and administration. I also used to pack and ship the online store orders, but 
        summer 2024 we decided to externalize our warehouse. 
        I have learned a lot about business operations through practical experience, and I believe that the skills I have learned in practice are more valuable than the skills learned in theory."
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
        title="Sports"
        des="I have done a lot of different sports in my life. Right now I am mostly into climbing." 
        icon={<GiMountainClimbing/>}
        modalContent="I have done a lot of different sports in my life. When I was a child I played football for a couple of years, and floorball for a little bit longer than that. When I grew up I started playing badminton and did that actively about 4 years.
        Also I was going to the gym all that time. During the last years of comprehensive school and in high school I was mostly going to the gym.
        Nowadays I am mostly into climbing, and I have been doing it actively since early 2024. I do indoors bouldering and rope climbing, but I am looking forward to do some outdoors rock climbing in near future."
        />
        
        
        
        <Card title="Future" 
        des="My main goal is to become a full-time entrepreneur! I also have some goals for my hobbies and sports too." 
        icon={<IoRocketSharp/>}
        modalContent="After starting my first company Kuutiostore Oy, I realized that at some point I want to become a full-time entrepreneur.
        I don't have a world-changing business ideas yet, but I am constantly trying to come up with some new and innovative ideas that I could build a business around of.
        "
        />
        </div>
        </section>
    );
}

export default Features;
