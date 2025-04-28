import React, { useState } from 'react';

const CreatorProfileForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
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
      const response = await fetch('/creator-profiles/', {
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
        first_name: '',
        last_name: '',
        email: '',
      });
    } catch (error) {
      setSubmitError(error.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#fff', borderRadius: '5px', maxWidth: '500px', margin: 'auto' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign:'center' }}>Create Creator Profile</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="first_name" style={{ display: 'block', marginBottom: '5px' }}>First Name:</label>
                    <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="last_name" style={{ display: 'block', marginBottom: '5px' }}>Last Name:</label>
                    <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#38beba', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    {isSubmitting ? 'Submitting...' : 'Create Creator Profile'}
                </button>
                {submitError && <div style={{ color: 'red', marginTop: '10px' }}>{submitError}</div>}
                {submitSuccess && <div style={{ color: 'green', marginTop: '10px' }}>Creator profile created successfully!</div>}
            </form>
        </div>
  );
};

export default CreatorProfileForm;