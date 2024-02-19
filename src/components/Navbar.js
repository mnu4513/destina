import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import menu_icon from '../assets/ico/menu.svg';
import user_icon from '../assets/ico/profile.svg';
import calendar_icon from '../assets/ico/calender.svg';
import check_icon from '../assets/ico/check.svg';

const Nav = ({ onMenuButtonClick }) => {

    return (
        <div className='flex flex-col lg:flex-row bg-gray-100'>
            <div className='h-14 lg:w-56'>
                <img src={logo} className='h-full w-56 mx-auto' alt='logo' />
            </div>

            <div className='flex flex-row px-2 py-2 justify-between items-center lg:min-w-max lg:space-x-3 w-full'>
                <div className='flex flex-row items-center w-full lg:w-auto'>
                    <div className='flex flex-col'>
                        <button onClick={onMenuButtonClick} className='menu-button'>
                            <img src={menu_icon} alt='menu' />
                        </button>
                    </div>
                    <p className='text-green-400 text-sm ml-2'>DESTINA INFOTECH </p>
                </div>

                <div className='flex flex-row justify-end items-center w-full lg:w-auto'>
                    <input placeholder='search' className='hidden mr-16 md:block' />
                    <div className='flex flex-row space-x-2'>
                        <img src={calendar_icon} alt='check' />
                        <img src={check_icon} alt='check' />
                        <img src={user_icon} alt='user' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
