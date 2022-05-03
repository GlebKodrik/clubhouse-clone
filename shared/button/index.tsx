import React from 'react';
import cn from 'classnames';

import styles from './button.module.scss';
import ButtonProps from './types';
import colors from './constants/color';


export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  color,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(className, styles.button, colors[color])}
      disabled={disabled}>
      {children}
    </button>
  );
};
