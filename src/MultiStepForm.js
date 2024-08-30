import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    cardNumber: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleStepChange = (step) => {
    setCurrentStep(step);
    if (!completedSteps.includes(step - 1)) {
      setCompletedSteps([...completedSteps, step - 1]);
    }
  };

  return (
    <div>
      <h1>MULTI STEP FORM VALIDATION</h1>
    <div className="multi-step-form-container">
      <div className="progress-chain-container">
        <ProgressChain currentStep={currentStep} completedSteps={completedSteps} />
      </div>
      <div className="form-step-container">
        {currentStep === 1 && (
          <Step1 formData={formData} setFormData={setFormData} setStep={handleStepChange} />
        )}
        {currentStep === 2 && (
          <Step2 formData={formData} setFormData={setFormData} setStep={handleStepChange} />
        )}
        {currentStep === 3 && (
          <Step3 formData={formData} setFormData={setFormData} setStep={handleStepChange} />
        )}
        {currentStep === 4 && (
          <Step4 formData={formData} setFormData={setFormData} setStep={handleStepChange} />
        )}
      </div>
    </div>
  </div>
  );
};

const ProgressChain = ({ currentStep, completedSteps }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="progress-chain">
      {steps.map((step, index) => (
        <div className="progress-step-container" key={step}>
          <div
            className={`progress-step ${(completedSteps.includes(step) || currentStep >= step) ? 'completed' : ''}`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`progress-line ${(completedSteps.includes(step) || currentStep > step) ? 'completed' : ''}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiStepForm;
