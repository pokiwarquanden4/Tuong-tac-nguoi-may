import React from 'react';

interface ButtonProps {
    label: string; // The text to display on the button
    onClick?: () => void; // The click event handler (optional)
    type?: 'button' | 'submit' | 'reset'; // The button type
    disabled?: boolean; // Disable the button
    variant?: 'primary' | 'secondary' | 'danger'; // Button style variants
    size?: 'small' | 'medium' | 'large'; // Button size variants
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = 'button',
    disabled = false,
    variant = 'primary',
    size = 'medium',
}) => {
    // Define CSS classes based on props
    const baseClass = 'btn';
    const variantClass = `btn--${variant}`;
    const sizeClass = `btn--${size}`;
    const classes = `${baseClass} ${variantClass} ${sizeClass}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
        >
            {label}
        </button>
    );
};

export default Button;
