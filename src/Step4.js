import React, { useState } from 'react';

const Step4 = ({ formData, setStep }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
  };

  const handleEditAll = () => {
    setStep(1); 
  };

  return (
    <div className="step4">
      {!submitted ? (
        <div>
          <h2>Confirmation</h2>
          <ul>
            <li><strong>First Name:</strong> {formData.firstName}</li>
            <li><strong>Last Name:</strong> {formData.lastName}</li>
            <li><strong>Email:</strong> {formData.email}</li>
            <li><strong>Phone:</strong> {formData.phone}</li>
            <li><strong>Address:</strong> {formData.address}</li>
            <li><strong>City:</strong> {formData.city}</li>
            <li><strong>State:</strong> {formData.state}</li>
            <li><strong>State:</strong> {formData.country}</li>
            <li><strong>ZIP:</strong> {formData.zip}</li>
            <li><strong>Card Number:</strong> **** **** **** {formData.cardNumber.slice(-4)}</li>
          </ul>
          
          <button type="button" onClick={handleEditAll}>Edit</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="success-message">
          <div className="checkmark"></div>
          <h3>Thank You</h3>
          <h3>Form submitted successfully!</h3>
        </div>
      )}
    </div>
  );
};

export default Step4;
