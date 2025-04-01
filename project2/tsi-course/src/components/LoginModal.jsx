import React, { useState } from 'react';
import Input from './Input';

const LoginModal = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправлен номер:', phoneNumber);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/[0.5] z-50">
            <div className="w-[400px] h-[400px] bg-white text-black p-6 rounded-[20px] shadow-lg relative flex flex-col justify-center">
                <button 
                    onClick={onClose} 
                    className="absolute right-[-55px] top-0 h-[45px] w-[45px] bg-gray-300 text-black text-[18pt] rounded-[20px] hover:bg-gray-400"
                >
                    ×
                </button>
                <h2 className="text-3xl font-bold text-center">Вход на сайт</h2>
                <p className="text-[12pt] py-5">Введите номер телефона, чтобы войти или зарегистрироваться</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-2 text-left">Номер телефона</label>
                        <Input 
                            className="w-full h-[60px] p-2 rounded-[20px]" 
                            placeholder="+7 (___) ___-__-__"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full h-[50px] bg-[#00e0c7] text-white p-2 rounded-[20px] hover:bg-[#006270] transition duration-300"
                    >
                        Получить код в СМС
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;