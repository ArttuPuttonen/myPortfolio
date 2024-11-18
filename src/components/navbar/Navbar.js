import React, {useState} from 'react';
import { Link } from "react-scroll"
import {logo} from '../../assets/index';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { navLinksdata } from '../../constants/index';
import Social from '../layouts/Social';




function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div>
                <h3 className="font-bold">ARTTU</h3>
                <h3 className="text-designColor font-bold">PUTTONEN</h3>
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
                <span onClick={()=>setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
                    <FiMenu/>
                    </span>
                    {
                        showMenu && (
                            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                                <div className="flex flex-col gap-8 py-2 relative">
                                <div>
                                {/* className="w-32 src={logo} alt="logo" */}
                                    <div className="pb-3">
                                        <h3 className="font-bold">ARTTU</h3>
                                        <h3 className="text-designColor font-bold">PUTTONEN</h3>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-2">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt facilis eos quaerat odit exercitationem soluta sequi perspiciatis, dolorem incidunt reprehenderit. Facere incidunt voluptas sequi corporis quam itaque eveniet neque et!
                                    </p>
                                </div>
                                <ul className="flex flex-col gap-4">
                                    {
                                        navLinksdata.map((navlink)=>(
                                            <li  className="text-base font-normal text-grey-400 tracking-wide cursor-pointer
                                            hover:text-designColor duration-300" key={navlink._id}>
                                               <Link 
                                               onClick={()=> setShowMenu(false)}
                                               activeClass="active" to={navlink.link} spy={true} smooth={true} offset={-70} duration={500}>{navlink.title}</Link> 
                                            </li>
                                       ))}
                                </ul> 
                                <div className="flex flex-col gap-4">
                                                <h2 className="text-base uppercase font-titleFont mb-1 mt-2">
                                                    Find me on
                                                </h2>
                                            <Social gap="gap-2"/>
                                    </div>                              
                                <span 
                                onClick={()=> setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor
                                duration-300 text-2xl cursor-pointer">
                                <MdClose/>
                                </span>
                                </div>

                            </div>
                        )
                    }
            </div>
        </div>
    );
    }

export default Navbar;