import React from 'react';

const Button = ({ children, onClick, variant = "primary", size = 'medium', backgroundColor = '' }) => {
    let buttonClass = "rounded text-white font-semibold";

    switch (variant) {
        case "primary":
            buttonClass += " bg-blue-500 hover:bg-blue-700";
            break;
        case "secondary":
            buttonClass += " bg-gray-500 hover:bg-gray-700";
            break;
        case "danger":
            buttonClass += " bg-red-500 hover:bg-red-700";
            break;
        default:
            buttonClass += " bg-blue-500 hover:bg-blue-700";
    }

    // Add size-specific classes
    if (size === 'small') {
        buttonClass += " py-1 px-2";
    } else if (size === 'large') {
        buttonClass += " py-3 px-6";
    } else {
        buttonClass += " py-2 px-4"; // Default size: medium
    }

    // Apply custom background color
    const customStyle = backgroundColor ? { backgroundColor } : {};

    return (
        <button className={buttonClass} style={customStyle} onClick={onClick}>
            {children}
        </button>
    );
};

export { Button };
