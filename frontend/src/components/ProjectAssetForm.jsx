import React, { useState } from 'react';

const ProjectAssetForm = () => {
  const [formData, setFormData] = useState({
    asset_url: '',
    project_id: '',
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
      const response = await fetch('/project-assets/', {
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
        asset_url: '',
        project_id: '',
      });
    } catch (error) {
      setSubmitError(error.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Create Project Asset</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="asset_url">Asset url:</label>
          <input
            type="text"
            id="asset_url"
            name="asset_url"
            value={formData.asset_url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="project_id">Project Id:</label>
          <input
            type="number"
            id="project_id"
            name="project_id"
            value={formData.project_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Create Project Asset'}
        </button>
        {submitError && <div style={{ color: 'red' }}>{submitError}</div>}
        {submitSuccess && <div style={{ color: 'green' }}>Project asset created successfully!</div>}
      </form>
    </div>
  );
};

export default ProjectAssetForm;