import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function SignUpWizard() {
  const [step, setStep] = useState(1);
  const { signIn } = useAuth();
  const nav = useNavigate();

  const next = () => setStep(s => s + 1);
  const finish = () => {
    signIn();            // stub
    nav('/storebook', { replace: true });
  };

  return (
    <div className="wizard">
      <h1>Sign-Up Wizard – Step {step}</h1>

      {step === 1 && (
        <>
          <p>Step 1 – Business name</p>
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>Step 2 – Contact info</p>
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <p>Step 3 – Confirm details</p>
          <button onClick={finish}>Finish & enter Storebook</button>
        </>
      )}
    </div>
  );
}