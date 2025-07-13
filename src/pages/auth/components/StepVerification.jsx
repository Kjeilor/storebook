import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBusiness } from '../../../services/business.service';
import { getCurrentUser } from '../../../services/auth.service';
import Splash from '../../../components/splash/Splash';
import './styles/StepVerification.scss';

const StepVerification = ({ data, prevStep }) => {
  const [status, setStatus] = useState('sending');
  const navigate = useNavigate();

  useEffect(() => {
    const createAccount = async () => {
      try {
        const { account } = await import('../../../services/auth.service');
        await account.create('unique()', data.ownerEmail, data.password, data.ownerName);
        await account.createEmailPasswordSession(data.ownerEmail, data.password);
        setStatus('sent');
      } catch (err) {
        setStatus('error');
      }
    };
    createAccount();
  }, [data]);

  useEffect(() => {
    if (status !== 'sent') return;
    const id = setInterval(async () => {
      try {
        const user = await getCurrentUser();
        if (user.emailVerification) {
          clearInterval(id);
          setStatus('verified');
        }
      } catch {
        clearInterval(id);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [status]);

  useEffect(() => {
    if (status === 'verified') {
      createBusiness(data)
        .then(() => navigate('/Storebook/dashboard', { replace: true }))
        .catch(console.error);
    }
  }, [status, data, navigate]);

  if (status === 'verified') return <Splash text="Setting up your dashboard…" />;
  if (status === 'sending') return <Splash text="Creating your account…" />;
  if (status === 'error') return <h2>Something went wrong – please refresh.</h2>;

  return (
    <form className="step-verification" onSubmit={(e) => e.preventDefault()}>
      <h2>Step 3 of 3 – Verify your email</h2>
      <p>We sent a code to <strong>{data.ownerEmail}</strong>.</p>
      <button onClick={() => setStatus('verified')}>Simulate verified</button>
    </form>
  );
};

export default StepVerification;