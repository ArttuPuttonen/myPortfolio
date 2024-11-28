import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Social from '../layouts/Social';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Student.', 'UI Designer.', 'Freelancer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
            <h4 className="text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
            <h1 className="text-5xl font-bold text-white">
                Hi, I'm {" "}
                <span className="text-designColor capitalize"> Arttu Puttonen </span>
            </h1>
            <h2 className="text-3xl font-bold text-white">
                a <span>{text}</span>
                <Cursor 
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
                />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
                I am Arttu Puttonen, a software engineering student and an entrepreneur. On this website you can
                find information about me, my projects, and my education and work experience. If you want to contact me, you can do so
                using the contact form at the bottom of this website. 
            </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
                Find me on
            </h2>
            <Social />
        </div>
    </div>
    </div>
    )
}

export default LeftBanner;
