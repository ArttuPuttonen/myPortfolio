import React from 'react';
import {FaBars} from 'react-icons/fa';
import Title from '../layouts/Title';
import Card from './Card';

function Features() {
    return (
        <section id="features" className="w-full py-20 border-b-[1px] border-b-black">   
        <Title title="Features" des="What I do"/>

        <div className="grid grid-cols-3 gap-20">
        <Card title="Business Strategy" des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" icon={<FaBars/>}/>
        <Card title="Business Strategy" des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" icon={<FaBars/>}/>
        <Card title="Business Strategy" des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" icon={<FaBars/>}/>
        <Card title="Business Strategy" des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" icon={<FaBars/>}/>
        <Card title="Business Strategy" des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" icon={<FaBars/>}/>
        <Card title="Business Strategy" des="lorem ipsum lorem askldfaklf asdflkasdf klasgbdfaklsjhf asdlfahsdf asdölffsdlk lökasdlkjöas" icon={<FaBars/>}/>
        
        </div>
        </section>
    );
}

export default Features;