import cn from 'classnames';
import React from 'react';

import styles from './avatar.module.scss';

import AvatarProps from './types';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  width,
  height,
  className,
  isVoice,
  letters,
}) => {
  return (
    <div
      style={{ width, height, backgroundImage: src ? `url(${src})` : '' }}
      className={cn(styles.avatar,
          isVoice ? styles.avatarBorder : '', className, 'd-ib', {
            [styles.emptyAvatar]: !src,
          })}>
      {!src ? letters : null}
    </div>
  );
};
