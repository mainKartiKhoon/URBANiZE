import React from 'react'
import "./Navbar.css"
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { RandomBoolContext } from '../context/RandomBoolContext';
// import { RiAccountCircleLine } from "react-icons/ri";
// import { FaUserCircle } from "react-icons/fa";
import userImage from "../assets/avatar.png"

import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
    function scrollToTop() {
        window.scroll(0, 0);
    }

    let RandomBool = useContext(RandomBoolContext);


    return (
        <div className='navbar border-b border-[#283141] h-[100px] w-[100vw] flex items-center justify-between text-white pl-[100px] pr-[100px]'>
            {/* //? First part of navbar  */}
            <div className='firstPartInNavbar flex items-center gap-[70px] '>
                {/* //? logo part */}


                <div className='flex items-center gap-[25px] sideBarAndText'>
                    <FaBars className='sidebar' size={27} />
                    {/* <img src={logo}></img> */}
                    <Link to="/">
                        <div onClick={scrollToTop} className='logoText'>URBANiZE</div>
                    </Link>
                </div>

                {/* //? */}
                <div className='navbarComponents text-[#bcc1c8]'>
                    <ul className='flex items-center gap-[15px]'>
                        {/* //? Home */}
                        <NavLink to="/">
                            <li className=' py-[8px] rounded-full px-[25px] hover:bg-[#1f2937] navbarItems '>Home</li>
                        </NavLink>

                        {/* //? Real Estate Listings */}
                        <NavLink to="/realestate">
                            <li className='navbarItems  py-[8px] rounded-full px-[25px] hover:bg-[#1f2937]'>Real Estate</li>
                        </NavLink>

                        {/* //? Car Listings */}
                        <NavLink to="/cars">
                            <li className=' py-[8px] rounded-full px-[25px] hover:bg-[#1f2937] navbarItems '>Cars</li>
                        </NavLink>

                        {/* //? About Us */}
                        <NavLink to="/aboutus">
                            <li className=' py-[8px] rounded-full px-[25px] hover:bg-[#1f2937] navbarItems '>About Us</li>
                        </NavLink>
                    </ul>
                </div>
            </div>

            {/* //? Second Part Of Navbar */}
            <div className='secondPartInNavbar flex items-center gap-[20px] '>
                <div className='outsideSearch rounded-full hover:cursor-pointer p-[15px] hover:bg-[#1f2937]'>
                    <FaSearch color='#bcc1c8' fontSize={25} />
                </div>
                {/* //? Login button */}
                <div>
        
                    {
                        RandomBool.isLoggedIn ? (
                            <div className=' hover:cursor-pointer transition-all duration-150 flex gap-[10px] items-center  rounded-[30px] p-[10px] px-[30px] font-bold  text-sm'><img src={userImage} className='rounded-full w-[27px] '></img>  <span className='text-lg font-semibold '>{RandomBool.nameOfUser}</span></div>
                        ) : (
                            RandomBool.isLogin ? (
                                <Link to="/login">
                                    <button className='transition-all duration-150 bg-[#4f46e5] rounded-[30px] p-[15px] px-[30px] font-bold hover:bg-[#4338ca]'>Log in</button>
                                </Link>
                            ) : (
                                <Link to="/signup">
                                    <button className='transition-all duration-150 bg-[#4f46e5] rounded-[30px] p-[15px] px-[30px] font-bold hover:bg-[#4338ca]'>Sign up</button>
                                </Link>
                            )
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar
