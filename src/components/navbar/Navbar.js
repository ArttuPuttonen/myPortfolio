import React from 'react';
import { Link } from "react-scroll"
import {logo} from '../../assets/index';
import { navLinksdata } from '../../constants/index';

function Navbar() {
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div>
                <h3>logo tähän</h3>
            </div>
            <div>
                <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                    {
                        navLinksdata.map((navlink)=>(
                            <li className="text-base font-normal text-grey-400 tracking-wide cursor-pointer
                            hover:text-designColor duration-300" key={navlink._id}>
                               <Link activeClass="active" to={navlink.link} spy={true} smooth={true} offset={-70} duration={500}>{navlink.title}</Link> 
                            </li>
                   ))}
                </ul>
            </div>
        </div>
    );
    }

export default Navbar;