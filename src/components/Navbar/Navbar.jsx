import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { GoClock } from 'react-icons/go';
import { TfiStatsUp } from 'react-icons/tfi';
import { FiMenu } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {

    return (
        <>
            {/* For Desktop */}
            <section className=' shadow max-sm:hidden'>
                <div className="flex justify-between items-center container mx-auto py-3">
                    <div className="">
                        <img src={logoImg} alt="" />
                    </div>
                    <div className="flex gap-2">
                        <NavLink to={'/'} className={({ isActive }) => `btn ${isActive && 'bg-[#244D3F] text-white'}`}>
                            <RiHome2Line /> Home
                        </NavLink>
                        <NavLink to={'/timeline'} className={({ isActive }) => `btn ${isActive && 'bg-[#244D3F] text-white'}`}>
                            <GoClock />
                            Timeline
                        </NavLink>
                        <NavLink to={'/stats'} className={({ isActive }) => `btn ${isActive && 'bg-[#244D3F] text-white'}`}>
                            <TfiStatsUp /> Stats
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* For Mobile */}
            <section className='shadow-sm sm:hidden'>
                <div className="navbar container bg-base-100  flex justify-between">
                    <div className="">
                        <img src={logoImg} alt="" className='w-25'/>
                    </div>
                    <div className="">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary><FiMenu></FiMenu></summary>
                                    <ul className="bg-base-100 rounded-t-none w-17.5 p-2 grid grid-cols-1">
                                        <NavLink to={'/'} className={({ isActive }) => `btn text-6xl ${isActive && 'bg-[#244D3F] text-white'}`}>
                                            <FaHome/>
                                        </NavLink>
                                        <NavLink to={'/timeline'} className={({ isActive }) => `btn  ${isActive && 'bg-[#244D3F] text-white'}`}>
                                            <GoClock />
                                            
                                        </NavLink>
                                        <NavLink to={'/stats'} className={({ isActive }) => `btn  ${isActive && 'bg-[#244D3F] text-white'}`}>
                                            <TfiStatsUp />
                                        </NavLink>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;