import React, { useState, useEffect } from 'react';

const AnalyticsEventList = () => {
  const [analyticsEvents, setAnalyticsEvents] = useState([]);

  useEffect(() => {
    const fetchAnalyticsEvents = async () => {
      try {
        const response = await fetch('/analytics-events/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAnalyticsEvents(data);
      } catch (error) {
        console.error('Failed to fetch analytics events:', error);
      }
    };

    fetchAnalyticsEvents();
  }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Analytics Events</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {analyticsEvents.map((analyticsEvent) => (
                    <li key={analyticsEvent.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {analyticsEvent.event_type} - {analyticsEvent.event_date}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default AnalyticsEventList;