import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Banner() {
    const [text] = useTypewriter({
        words: ['Software Engineer Student', 'UI Designer', 'Freelancer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <section id="home" className="w-full pt-10 pb-20 items-center flex border-b-[1px] font-titleFont border-b-black">
            <div className="w-1/2">
                <div className="flex flex-col gap-5">
                    <h4 className="text-lg font-normal">Welcome to my portfolio</h4>
                    <h1 className="text-5xl font-bold text-white">
                        Hi, I'm {" "}
                        <span className="text-designColor capitalize"> Arttu Puttonen </span>
                    </h1>
                    <h2 className="text-3xl font-bold text-white">
                        a <span>{text}.</span>
                        <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                        />
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
                        Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
                        Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et luctus enim lorem sit amet dolor. 
                        Vestibulum nec velit ante. Praesent placerat risus quis eros.
                    </p>
                </div>
            </div>
            <div className="w-1/2">alöksdj</div>
        </section>
    );
}

export default Banner;
