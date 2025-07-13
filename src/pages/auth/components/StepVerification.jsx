import React, { useEffect, useState } from 'react';
import { account } from '../../../lib/appwriteConfig';
import { createBusiness } from '../../../lib/createBusiness';
import './styles/StepVerification.scss';

const StepVerification = ({ data, prevStep }) => {
  const [status, setStatus] = useState('sending'); // sending | sent | verified | error
  const [code, setCode] = useState('');

  useEffect(() => {
    // Create the user account (Appwrite sends the email automatically)
    const createAccount = async () => {
      try {
        await account.create(
          'unique()',                   // userId
          data.ownerEmail,
          data.password,
          data.ownerName
        );
        await account.createEmailPasswordSession(data.ownerEmail, data.password);
        setStatus('sent');
      } catch (err) {
        setStatus('error');
        console.error(err);
      }
    };
    createAccount();
  }, [data]);

  const handleCodeChange = (e) => setCode(e.target.value);

  const verifyCode = async () => {
    try {
      await account.updateVerification(code);
      setStatus('verified');
    } catch (err) {
      setStatus('error');
    }
  };

  // If user clicks the link in the email, Appwrite auto-updates verification
  // so we poll the account to see if it's already verified
  useEffect(() => {
    if (status === 'sent') {
      const id = setInterval(async () => {
        try {
          const user = await account.get();
          if (user.emailVerification) {
            setStatus('verified');
            clearInterval(id);
          }
        } catch {
          clearInterval(id);
        }
      }, 3000);
      return () => clearInterval(id);
    }
  }, [status]);

  if (status === 'verified') {
    createBusiness(data).catch(console.error); // store business doc & logo
    return (
      <div className="step-verification">
        <h2>Account verified!</h2>
        <p>You’ll be redirected to the dashboard in a moment…</p>
      </div>
    );
  }

  if (status === 'sending') {
    return (
      <div className="step-verification">
        <h2>Creating your account…</h2>
      </div>
    );
  }

  if (status === 'sent') {
    return (
      <form className="step-verification" onSubmit={(e) => { e.preventDefault(); verifyCode(); }}>
        <h2>Step 3 of 3 – Verify your email</h2>
        <p>
          We sent a six-digit code to <strong>{data.ownerEmail}</strong>.
        </p>
        <label>
          Verification code
          <input
            value={code}
            onChange={handleCodeChange}
            maxLength={6}
            pattern="\d*"
            placeholder="123456"
            required
          />
        </label>
        <div className="buttons">
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Verify</button>
        </div>
      </form>
    );
  }

  if (status === 'error') {
    return (
      <div className="step-verification">
        <h2>Something went wrong</h2>
        <p>Please refresh and try again.</p>
      </div>
    );
  }
};

export default StepVerification;