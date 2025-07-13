import React, { useState } from 'react';
import StepBusinessDetails from './components/StepBusinessDetails';
import StepOwnerDetails from './components/StepOwnerDetails';
import StepVerification from './components/StepVerification';
import './styles/SignUpBusiness.scss';

const TOTAL_STEPS = 3;

const SignUpBusiness = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({}); // all collected data

  const nextStep = (partial) => {
    setData({ ...data, ...partial });
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepBusinessDetails nextStep={nextStep} />;
      case 2:
        return <StepOwnerDetails nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <StepVerification data={data} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="signup-business">
      <h1>Create your business account</h1>
      <p>Step {step} of {TOTAL_STEPS}</p>
      {renderStep()}
    </div>
  );
};

export default SignUpBusiness;