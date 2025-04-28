import React, { useState, useEffect } from 'react';

const CustomerProfileList = () => {
  const [customerProfiles, setCustomerProfiles] = useState([]);

  useEffect(() => {
    const fetchCustomerProfiles = async () => {
      try {
        const response = await fetch('/customer-profiles/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCustomerProfiles(data);
      } catch (error) {
        console.error('Failed to fetch customer profiles:', error);
      }
    };

    fetchCustomerProfiles();
  }, []);

  return ( <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Customer Profiles</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {customerProfiles.map((customerProfile) => (
                    <li key={customerProfile.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {customerProfile.first_name} {customerProfile.last_name} ({customerProfile.email})
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default CustomerProfileList;