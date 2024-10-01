import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import {kuu} from '../../assets/index';

const Projects = () => {
    return (
        <section id='projects' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
            <Title title="Projects"
            des="My projects"/> 
            </div>
            <div className="grid grid-cols-3 gap-14">
                <ProjectCard title="Kuu" img={kuu} des="lorem lorem lorem vittu saatanaaaa ajfsdljkasdf adsf asdf asdf asdf asdf  asdfasdflhkfasdk"/>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    );
}

export default Projects;

