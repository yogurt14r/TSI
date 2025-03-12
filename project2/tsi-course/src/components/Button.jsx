import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="bg-white hover:bg-[#00e0c7] text-[#000] px-4 py-2 rounded-full transition duration-300">
            {children}
        </button>
    );
};

export default Button;