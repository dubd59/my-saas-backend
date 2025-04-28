import React, { useState, useEffect } from 'react';

const MarketingLeadList = () => {
  const [marketingLeads, setMarketingLeads] = useState([]);

  useEffect(() => {
    const fetchMarketingLeads = async () => {
      try {
        const response = await fetch('/marketing-leads/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMarketingLeads(data);
      } catch (error) {
        console.error('Failed to fetch marketing leads:', error);
      }
    };

    fetchMarketingLeads();
  }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Marketing Leads</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {marketingLeads.map((marketingLead) => (
                    <li key={marketingLead.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {marketingLead.email} - {marketingLead.campaign_id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarketingLeadList;

export default MarketingLeadList;