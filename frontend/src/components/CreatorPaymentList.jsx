import React, { useState, useEffect } from 'react';

const CreatorPaymentList = () => {
  const [creatorPayments, setCreatorPayments] = useState([]);

  useEffect(() => {
    const fetchCreatorPayments = async () => {
      try {
        const response = await fetch('/creator-payments/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCreatorPayments(data);
      } catch (error) {
        console.error('Failed to fetch creator payments:', error);
      }
    };

    fetchCreatorPayments();
  }, []);

    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            marginBottom: '20px',
            backgroundColor: '#fff',
            borderRadius: '5px'
        }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Creator Payments</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {creatorPayments.map((creatorPayment) => (
                    <li key={creatorPayment.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {creatorPayment.payment_method} - {creatorPayment.account_details}
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default CreatorPaymentList;