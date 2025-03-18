import React from 'react';

const Input = ({
    type = 'text',
    placeholder = '',
    value = '',
    onChange,
    className = '',
    disabled = false,
    }) => {
    return (
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full p-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
    );
};

export default Input;