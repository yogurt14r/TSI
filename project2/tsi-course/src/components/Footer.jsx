import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-[#3c3c3b] text-white py-8">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Link to="/">
                            <img src={logo} alt="ХАВЧИК" className="h-12" />
                        </Link>
                        <div className="font-bold text-lg">Доставка самсы Якутск</div>
                    </div>
                    <nav className="flex flex-wrap gap-4 md:gap-8">
                        <Link to="/about" className="hover:text-gray-300">О нас</Link>
                        <Link to="/menu" className="hover:text-gray-300">Меню</Link>
                        <Link to="/delivery" className="hover:text-gray-300">Доставка</Link>
                        <Link to="/contacts" className="hover:text-gray-300">Контакты</Link>
                    </nav>
                    <div className="flex gap-4">
                        <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/telegram.svg" alt="Telegram" className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
                        </a>
                        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/vk.svg" alt="Twitter" className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-sm text-left text-gray-300">
                © 2025 ООО "HAVCHIK Entertainment"<br />677013, ул. Кулаковского, 48, Якутск, Респ. Саха (Якутия)
                </div>
            </div>
        </footer>
    );
};

export default Footer;