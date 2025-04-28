import React, { useState, useEffect } from 'react';

const CustomerFeedbackList = () => {
  const [customerFeedbacks, setCustomerFeedbacks] = useState([]);

  useEffect(() => {
    const fetchCustomerFeedbacks = async () => {
      try {
        const response = await fetch('/customer-feedbacks/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCustomerFeedbacks(data);
      } catch (error) {
        console.error('Failed to fetch customer feedbacks:', error);
      }
    };

    fetchCustomerFeedbacks();
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Customer Feedbacks</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {customerFeedbacks.map((customerFeedback) => (
                    <li key={customerFeedback.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {customerFeedback.feedback_text} - {customerFeedback.feedback_date}
                    </li>
                ))}
            </ul>
        </div>
  );
};

export default CustomerFeedbackList;