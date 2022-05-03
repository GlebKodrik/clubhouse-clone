import React, { useState } from 'react';

import { Welcome } from '../screens/home/components/steps/welcome-step';
import EnterCode from '../screens/home/components/steps/enter-code';
import request from '../api/request';

const stepsComponent = {
  0: Welcome,
  1: EnterCode,
};

const Home: React.FC = () => {
  const [step, setStep] = useState(1);
  const Step = stepsComponent[step];
  request.send('');
  return (
    <>
      <Step />
    </>
  );
};

export default Home;
