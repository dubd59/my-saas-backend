import React, { useState } from 'react';

const CustomerFeedbackForm = () => {
  const [formData, setFormData] = useState({
    feedback_text: '',
    feedback_date: '',
    customer_id: '',
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
      const response = await fetch('/customer-feedbacks/', {
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
        feedback_text: '',
        feedback_date: '',
        customer_id: '',
      });
    } catch (error) {
      setSubmitError(error.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Create Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feedback_text">Feedback Text:</label>
          <input
            type="text"
            id="feedback_text"
            name="feedback_text"
            value={formData.feedback_text}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="feedback_date">Feedback Date:</label>
          <input
            type="datetime-local"
            id="feedback_date"
            name="feedback_date"
            value={formData.feedback_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="customer_id">Customer Id:</label>
          <input
            type="number"
            id="customer_id"
            name="customer_id"
            value={formData.customer_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Create Customer Feedback'}
        </button>
        {submitError && <div style={{ color: 'red' }}>{submitError}</div>}
        {submitSuccess && <div style={{ color: 'green' }}>Customer feedback created successfully!</div>}
      </form>
    </div>
  );
};

export default CustomerFeedbackForm;