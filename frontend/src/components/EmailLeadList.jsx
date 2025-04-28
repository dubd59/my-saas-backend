import React, { useState, useEffect } from 'react';

const EmailLeadList = () => {
  const [emailLeads, setEmailLeads] = useState([]);

  useEffect(() => {
    const fetchEmailLeads = async () => {
      try {
        const response = await fetch('/email-leads/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEmailLeads(data);
      } catch (error) {
        console.error('Failed to fetch email leads:', error);
      }
    };

    fetchEmailLeads();
  }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Email Leads</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {emailLeads.map((emailLead) => (
                    <li key={emailLead.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {emailLead.address} - {emailLead.campaign_id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailLeadList;