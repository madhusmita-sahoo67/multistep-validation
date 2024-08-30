import React, { useState } from 'react';

const Step1 = ({ formData, setFormData, setStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setStep(2); 
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // Clear the error if the field is valid
    const newErrors = { ...errors };
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        delete newErrors.email;
      }
    } else if (field === 'phone') {
      const phoneRegex = /^\d{10}$/;
      if (phoneRegex.test(value)) {
        delete newErrors.phone;
      }
    } else if (value.trim()) {
      delete newErrors[field];
    }
    setErrors(newErrors);
  };

  const getBorderColor = (field) => {
    if (errors[field]) {
      return 'red';
    }
    if (formData[field] && !errors[field]) {
      return 'green';
    }
    return '';
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          style={{ borderColor: getBorderColor('firstName') }}
          placeholder='Enter First Name'
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          style={{ borderColor: getBorderColor('lastName') }}
          placeholder='Enter Last Name'
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          style={{ borderColor: getBorderColor('email') }}
          placeholder='Enter e-mail address'
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="number"  
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          style={{ borderColor: getBorderColor('phone') }}
          placeholder='Enter Phone Number'
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
