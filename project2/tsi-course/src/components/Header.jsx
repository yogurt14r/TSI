import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from './button'
import logo from '../assets/logo.svg';
import LoginModal from './LoginModal';

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    return (
        <>
            <div className="top-0 left-0 w-full bg-[#006270] text-white p-[20px]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-[50px]">
                            <Link to="/"><img src={logo} alt="ХАВЧИК"/></Link>
                            <div className="font-bold">Доставка самсы Якутск</div>
                        </div>
                        
                        <Button onClick={() => setIsLoginModalOpen(true)}>Войти</Button>
                    </div>
                </div>
                <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}/>
            </div>
        </>
    )
}

export default Header