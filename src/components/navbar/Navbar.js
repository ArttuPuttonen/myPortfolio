import React, {useState} from 'react';
import { Link } from "react-scroll"
import {logo} from '../../assets/index';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { navLinksdata } from '../../constants/index';


function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
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
                <span onClick={()=>setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
                    <FiMenu/>
                    </span>
                    {
                        showMenu && (
                            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                                <div>
                                <div>
                                {/* className="w-32 src={logo} alt="logo" */}
                                    <h2>Logo tähän</h2> 
                                    <p className="text-sm text-gray-400 mt-2">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt facilis eos quaerat odit exercitationem soluta sequi perspiciatis, dolorem incidunt reprehenderit. Facere incidunt voluptas sequi corporis quam itaque eveniet neque et!

                                    </p>
                                </div>
                                </div>
                                <span 
                                onClick={()=> setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor
                                duration-300 text-2xl cursor-pointer">
                                <MdClose/>

                                </span>
                            </div>
                        )
                    }
            </div>
        </div>
    );
    }

export default Navbar;