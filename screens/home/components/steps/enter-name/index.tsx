import React from 'react';
import cn from 'classnames';

import styles from './enter-name.module.scss';

import { Button } from '../../../../../shared/button';
import { StepInfo } from '../../../../../shared/step-info';
import { WhiteBlock } from '../../../../../shared/white-block';

const EnterName = () => {
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={cn('m-auto', styles.whiteBlock)}>
        <div className="mt-30 mb-30">
          <input
            value={'все ок'}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" alt='arrow'/>
        </Button>
      </WhiteBlock>
    </div>
  );
};

export default EnterName;
