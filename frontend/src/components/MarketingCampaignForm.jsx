import React, { useState } from 'react';

const MarketingCampaignForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    start_date: '',
    end_date: '',
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
      const response = await fetch('/marketing-campaigns/', {
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
        name: '',
        start_date: '',
        end_date: '',
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
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign:'center' }}>Create Marketing Campaign</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="start_date" style={{ display: 'block', marginBottom: '5px' }}>Start Date:</label>
                    <input type="datetime-local" id="start_date" name="start_date" value={formData.start_date} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="end_date" style={{ display: 'block', marginBottom: '5px' }}>End Date:</label>
                    <input type="datetime-local" id="end_date" name="end_date" value={formData.end_date} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="creator_id" style={{ display: 'block', marginBottom: '5px' }}>Creator Id:</label>
                    <input type="number" id="creator_id" name="creator_id" value={formData.creator_id} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#38beba', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    {isSubmitting ? 'Submitting...' : 'Create Marketing Campaign'}
                </button>
                {submitError && <div style={{ color: 'red', marginTop: '10px' }}>{submitError}</div>}
                {submitSuccess && <div style={{ color: 'green', marginTop: '10px' }}>Marketing campaign created successfully!</div>}
            </form>
        </div>
  );
};

export default MarketingCampaignForm;