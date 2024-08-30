import React, { useState } from 'react';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
  "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", 
  "Delhi", "Puducherry"
];

const countries = [
  "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", 
  "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", 
  "Georgia", "India", "Indonesia", "Iran", "Iraq", 
  "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", 
  "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", 
  "Mongolia", "Myanmar (Burma)", "Nepal", "North Korea", "Oman", 
  "Pakistan", "Palestine", "Philippines", "Qatar", "Russia", 
  "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", 
  "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", 
  "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
];

const Step2 = ({ formData, setFormData, setStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip || !/^\d{5}$/.test(formData.zip)) {
      newErrors.zip = "Valid 5-digit ZIP code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setStep(3); 
    }
  };

  const handleBack = () => {
    setStep(1); 
  };

  return (
    <div>
      <h2>Address Information</h2>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          placeholder='Enter Full Address'
          style={{ borderColor: errors.address ? 'red' : formData.address ? 'green' : '' }}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <div style={{ display: 'flex',  gap: '10px'}}>
        <div style={{ flex: 1 }}>
          <label>City:</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder='Enter City Name'
            style={{ borderColor: errors.city ? 'red' : formData.city ? 'green' : '' }}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        <div style={{ flex: 1 }}>
          <label>State:</label>
          <select
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            style={{ borderColor: errors.state ? 'red' : formData.state ? 'green' : '' }}
          >
            <option value="">Select State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="error">{errors.state}</p>}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1 }}>
          <label>Country:</label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            style={{ borderColor: errors.country ? 'red' : formData.country ? 'green' : '' }}
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>
        <div style={{ flex: 1 }}>
          <label>ZIP Code:</label>
          <input
            type="number"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
            placeholder='Enter Zip Code'
            style={{ borderColor: errors.zip ? 'red' : formData.zip ? 'green' : '' }}
          />
          {errors.zip && <p className="error">{errors.zip}</p>}
        </div>
      </div>
      <button onClick={handleBack}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
