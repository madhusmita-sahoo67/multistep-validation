import React, { useState } from 'react';

const Step3 = ({ formData, setFormData, setStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Valid 16-digit card number is required";
    }
    if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Valid expiry date (MM/YY) is required";
    }
    if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "Valid 3-digit CVV is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(4);
    }
  };

  const handleBack = () => {
    setStep(2);
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          value={formData.cardNumber}
          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
        />
        {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
      </div>
      <div>
        <label>Expiry Date (MM/YY):</label>
        <input
          type="text"
          value={formData.expiryDate}
          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
        />
        {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
      </div>
      <div>
        <label>CVV:</label>
        <input
          type="text"
          value={formData.cvv}
          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
        />
        {errors.cvv && <p className="error">{errors.cvv}</p>}
      </div>
      <button onClick={handleBack}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step3;
