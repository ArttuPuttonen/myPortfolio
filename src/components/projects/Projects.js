import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import {coming_soon} from '../../assets/index';
import { Speedcubing_Finland } from '../../assets/index';
import { Matkahuolto_Tracker } from '../../assets/index'; 
import { Crypto_tracker } from '../../assets/index';// Assuming you want to use this image in the future

const Projects = () => {
    return (
        <section id='projects' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            <Title title="Projects"
            des="My projects"/> 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectCard
                title="Speedcubing Finland ry"
                img={Speedcubing_Finland} des="I have developed most of the Speedcubing Finland's website,
                including a database system for handling the membership register." 
                websiteLink="https://speedcubingfinland.fi"/>
                <ProjectCard
                title="Matkahuolto Tracker"
                img={Matkahuolto_Tracker}
                des="I built a Telegram Bot for my company that alerts for packages
                that stopped moving. The script is in Python and it utilizes Telegram and Matkahuolto APIs!"/>
                <ProjectCard
                title="Cryptocurrency Tracker"
                img={Crypto_tracker}
                des="This project was part of an embedded systems course.
                The gadget is operated by ESP8266 microcontroller, C++, Arduino library and Binance API."
                githubLink="https://github.com/ArttuPuttonen/SJOM/tree/main/bitcoin_tracker"/>
                <ProjectCard title="Coming soon" img={coming_soon} des="Projects work in progress"/>
                <ProjectCard title="Coming soon" img={coming_soon} des="Projects work in progress"/>
                <ProjectCard title="Coming soon" img={coming_soon} des="Projects work in progress"/>
            </div>
        </section>
    );
}

export default Projects;

