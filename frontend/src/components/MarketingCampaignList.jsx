import React, { useState, useEffect } from 'react';

const MarketingCampaignList = () => {
  const [marketingCampaigns, setMarketingCampaigns] = useState([]);

  useEffect(() => {
    const fetchMarketingCampaigns = async () => {
      try {
        const response = await fetch('/marketing-campaigns/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMarketingCampaigns(data);
      } catch (error) {
        console.error('Failed to fetch marketing campaigns:', error);
      }
    };

    fetchMarketingCampaigns();
  }, []);

  return (
    <div>
      <h2>Marketing Campaigns</h2>
      <ul>
        {marketingCampaigns.map((marketingCampaign) => (
          <li key={marketingCampaign.id}>
            {marketingCampaign.campaign_name} - {marketingCampaign.budget}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketingCampaignList;