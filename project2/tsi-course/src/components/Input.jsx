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
        className={`bg-gray-100 border-none
    shadow-[inset_0_0_0_1px_#d1d5db]
    focus:shadow-[inset_0_0_0_2px_#00e0c7]
    focus:outline-none
    transition-shadow
    duration-200 ${className}`}
        />
    );
};

export default Input;