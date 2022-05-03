import React from 'react';
import cn from 'classnames';

import styles from './step-info.module.scss';

import StepInfoProps from './types';

export const StepInfo: React.FC<StepInfoProps> = ({
  title, description, icon }) => {
  return (
    <div className={cn(styles.block, 'text-center')}>
      <div>
        <img className={styles.img} src={icon} alt="Step picture" />
      </div>
      <b className={styles.title}>{title}</b>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

