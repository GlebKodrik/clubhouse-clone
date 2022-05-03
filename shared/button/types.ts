import React from 'react';
import colors from './constants/color';

type ButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
    color?: keyof typeof colors;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export default ButtonProps;
