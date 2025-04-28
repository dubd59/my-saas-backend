import React, { useState, useEffect } from 'react';

const MarketingChannelList = () => {
  const [marketingChannels, setMarketingChannels] = useState([]);

  useEffect(() => {
    const fetchMarketingChannels = async () => {
      try {
        const response = await fetch('/marketing-channels/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMarketingChannels(data);
      } catch (error) {
        console.error('Failed to fetch marketing channels:', error);
      }
    };

    fetchMarketingChannels();
  }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Marketing Channels</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {marketingChannels.map((marketingChannel) => (
                    <li key={marketingChannel.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {marketingChannel.channel_name}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );

};

export default MarketingChannelList;