import React, { useState } from 'react';
import cn from 'classnames';

import styles from './enter-code.module.scss';

import { StepInfo } from '../../../../../shared/step-info';
import { WhiteBlock } from '../../../../../shared/white-block';
import { Button } from '../../../../../shared/button';

const EnterCode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [codes, setCodes] = React.useState(['', '', '', '']);
  const nextDisabled = codes.some((v) => !v);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSubmit = async () => {
    setIsLoading(true);
  };

  return (
    <div className={styles.block}>
      {!isLoading ? (
          <>
            <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
            <WhiteBlock className={cn('m-auto mt-30', styles.whiteBlock)}>
              <div className={cn('mb-30', styles.codeInput)}>
                {codes.map((code, index) => (
                  <input
                    key={index}
                    type="tel"
                    placeholder="X"
                    maxLength={1}
                    id={String(index)}
                    onChange={handleChangeInput}
                    value={code}
                  />
                ))}
              </div>
              <Button onClick={onSubmit} disabled={nextDisabled}>
                Next
                <img className="d-ib ml-10" src="/static/arrow.svg" alt='arrow'/>
              </Button>
            </WhiteBlock>
          </>
      ) : (
          <div className="text-center">
            <div className="loader" />
            <h3 className="mt-5">Activation in progress ...</h3>
          </div>
      )}

    </div>
  );
};

export default EnterCode;
