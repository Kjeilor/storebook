import React, { useState } from 'react';
import './styles/StepOwnerDetails.scss';

const StepOwnerDetails = ({ nextStep, prevStep }) => {
  const [form, setForm] = useState({
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.ownerName.trim()) e.ownerName = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.ownerEmail))
      e.ownerEmail = 'Invalid email';
    if (!/^[0-9]{10}$/.test(form.ownerPhone))
      e.ownerPhone = '10-digit phone required';
    if (!form.password || form.password.length < 8)
      e.password = 'Min 8 characters';
    if (form.password !== form.confirmPassword)
      e.confirmPassword = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    nextStep({
      ownerName: form.ownerName.trim(),
      ownerEmail: form.ownerEmail.trim(),
      ownerPhone: form.ownerPhone.trim(),
      password: form.password,
    });
  };

  return (
    <form className="step-owner-details" onSubmit={handleSubmit} noValidate>
      <h2>Step 2 of 3 – Owner Details</h2>

      <label>
        Your Name *
        <input
          name="ownerName"
          value={form.ownerName}
          onChange={handleChange}
        />
        {errors.ownerName && <span className="error">{errors.ownerName}</span>}
      </label>

      <label>
        Email Address *
        <input
          type="email"
          name="ownerEmail"
          value={form.ownerEmail}
          onChange={handleChange}
        />
        {errors.ownerEmail && <span className="error">{errors.ownerEmail}</span>}
      </label>

      <label>
        Phone Number *
        <input
          name="ownerPhone"
          value={form.ownerPhone}
          onChange={handleChange}
          placeholder="1234567890"
        />
        {errors.ownerPhone && <span className="error">{errors.ownerPhone}</span>}
      </label>

      <label>
        Password *
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>

      <label>
        Confirm Password *
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </label>

      <div className="buttons">
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default StepOwnerDetails;