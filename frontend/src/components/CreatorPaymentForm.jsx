import React, { useState } from 'react';

const CreatorPaymentForm = () => {
  const [formData, setFormData] = useState({
    payment_method: '',
    account_details: '',
    creator_id: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/creator-payments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      setSubmitSuccess(true);
      setFormData({
        payment_method: '',
        account_details: '',
        creator_id: '',
      });
    } catch (error) {
      setSubmitError(error.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', maxWidth: '500px', margin: 'auto' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign:'center' }}>Create Creator Payment</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="payment_method" style={{ display: 'block', marginBottom: '5px' }}>Payment Method:</label>
                    <input type="text" id="payment_method" name="payment_method" value={formData.payment_method} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="account_details" style={{ display: 'block', marginBottom: '5px' }}>Account Details:</label>
                    <input type="text" id="account_details" name="account_details" value={formData.account_details} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="creator_id" style={{ display: 'block', marginBottom: '5px' }}>Creator Id:</label>
                    <input type="number" id="creator_id" name="creator_id" value={formData.creator_id} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#38beba', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    {isSubmitting ? 'Submitting...' : 'Create Creator Payment'}
                </button>
                {submitError && <div style={{ color: 'red', marginTop: '10px' }}>{submitError}</div>}
                {submitSuccess && <div style={{ color: 'green', marginTop: '10px' }}>Creator payment created successfully!</div>}
            </form>
        </div>
  );
};

export default CreatorPaymentForm;