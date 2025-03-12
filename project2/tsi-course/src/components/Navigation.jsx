import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './button';

const Navigation = () => {
    return (
        <div className="sticky top-0 w-full bg-[#009394]/[.3] backdrop-blur-xl text-black p-[10px] ext-center z-10">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex gap-[50px]">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white underline' : 'text-black')}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-white underline' : 'text-black')}>About</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-white underline' : 'text-black')}>Blog</NavLink>
                    </div>
                    <Button>Корзина</Button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;