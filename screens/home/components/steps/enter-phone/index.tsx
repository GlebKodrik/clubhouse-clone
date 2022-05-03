import React from 'react';
import cn from 'classnames';
import NumberFormat from 'react-number-format';

import styles from './enter-phone.module.scss';

import { StepInfo } from '../../../../../shared/step-info';
import { WhiteBlock } from '../../../../../shared/white-block';
import { Button } from '../../../../../shared/button';

import InputValueState from './types';


const EnterPhone = () => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);

  const nextDisabled = !values.formattedValue || values.formattedValue.includes('_');

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <WhiteBlock className={cn('m-auto mt-30', styles.whiteBlock)}>
        <div className={cn('mb-30', styles.input)}>
          <img src="/static/russian-flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+# (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 333-22-11"
            value={values.value}
            onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
          />
        </div>
        <Button disabled={nextDisabled}>
            Next
          <img className="d-ib ml-10" src="/static/arrow.svg" alt='arrow'/>
        </Button>
        <p className={cn(styles.policyText, 'mt-30')}>
            By entering your number, you’re agreeing to our Terms of Service and Privacy Policy.
            Thanks!
        </p>
      </WhiteBlock>
    </div>
  );
};


export default EnterPhone;
