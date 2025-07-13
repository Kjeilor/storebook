import React, { useState } from 'react';
import './styles/StepBusinessDetails.scss';

const BUSINESS_TYPES = ['Retail', 'Restaurant', 'Services', 'Other'];
const COUNTRIES = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'India', 'Nigeria'];

const StepBusinessDetails = ({ nextStep }) => {
  const [form, setForm] = useState({
    businessName: '',
    businessType: '',
    industry: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    logo: null,
    logoPreview: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: '' }));
  };

  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/') || file.size > 2 * 1024 * 1024) {
      setErrors((e) => ({ ...e, logo: 'Max 2 MB image file only' }));
      return;
    }
    setForm((f) => ({
      ...f,
      logo: file,
      logoPreview: URL.createObjectURL(file),
    }));
    setErrors((e) => ({ ...e, logo: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.businessName.trim()) e.businessName = 'Required';
    if (!form.businessType) e.businessType = 'Required';
    if (!form.streetAddress.trim()) e.streetAddress = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.state.trim()) e.state = 'Required';
    if (!form.zipCode.trim()) e.zipCode = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build payload
    const payload = {
      businessName: form.businessName.trim(),
      businessType: form.businessType,
      industry: form.industry.trim(),
      address: {
        streetAddress: form.streetAddress.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        zipCode: form.zipCode.trim(),
        country: form.country,
      },
      logo: form.logoPreview || '',
    };
    nextStep(payload);
  };

  return (
    <form className="step-business-details" onSubmit={handleSubmit} noValidate>
      <h2>Step 1 of 3 – Business Details</h2>

      <label>
        Business Name *
        <input
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
        />
        {errors.businessName && <span className="error">{errors.businessName}</span>}
      </label>

      <label>
        Business Type *
        <select name="businessType" value={form.businessType} onChange={handleChange}>
          <option value="">Select…</option>
          {BUSINESS_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.businessType && <span className="error">{errors.businessType}</span>}
      </label>

      <label>
        Industry (optional)
        <input name="industry" value={form.industry} onChange={handleChange} />
      </label>

      <label>
        Street Address *
        <input
          name="streetAddress"
          value={form.streetAddress}
          onChange={handleChange}
        />
        {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}
      </label>

      <div className="row">
        <label>
          City *
          <input name="city" value={form.city} onChange={handleChange} />
          {errors.city && <span className="error">{errors.city}</span>}
        </label>

        <label>
          State / Province *
          <input name="state" value={form.state} onChange={handleChange} />
          {errors.state && <span className="error">{errors.state}</span>}
        </label>
      </div>

      <label>
        ZIP / Postal Code *
        <input name="zipCode" value={form.zipCode} onChange={handleChange} />
        {errors.zipCode && <span className="error">{errors.zipCode}</span>}
      </label>

      <label>
        Country *
        <select name="country" value={form.country} onChange={handleChange}>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label>
        Logo (optional, max 2 MB)
        <input type="file" accept="image/*" onChange={handleLogo} />
        {errors.logo && <span className="error">{errors.logo}</span>}
        {form.logoPreview && (
          <img src={form.logoPreview} alt="Preview" className="logo-preview" />
        )}
      </label>

      <button type="submit">Next</button>
    </form>
  );
};

export default StepBusinessDetails;