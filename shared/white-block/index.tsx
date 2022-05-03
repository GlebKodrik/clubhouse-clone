import React from 'react';
import cn from 'classnames';

import styles from './white-block.module.scss';

import Props from './types';

export const WhiteBlock: React.FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.block, className)}>{children}</div>;
};

