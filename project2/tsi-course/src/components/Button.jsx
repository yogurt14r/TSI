import React from 'react';

const Button = ({ onClick, children, className='' }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} px-4 py-2 rounded-[20px] transition duration-300 hover:bg-[#00e0c7]`}
        >
            {children}
        </button>
    );
};

export default Button;