import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/[0.5] bg-opacity-50 z-50">
            <div className="w-[480px] bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Вход</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Номер телефона</label>
                        <input type="tel" className="w-full p-2 border rounded" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Получить код в СМС
                    </button>
                </form>
                <button onClick={onClose} className="mt-4 w-full bg-gray-300 text-black p-2 rounded hover:bg-gray-400">
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default LoginModal;