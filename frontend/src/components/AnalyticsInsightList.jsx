import React, { useState, useEffect } from 'react';

const AnalyticsInsightList = () => {
  const [analyticsInsights, setAnalyticsInsights] = useState([]);

  useEffect(() => {
    const fetchAnalyticsInsights = async () => {
      try {
        const response = await fetch('/analytics-insights/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAnalyticsInsights(data);
      } catch (error) {
        console.error('Failed to fetch analytics insights:', error);
      }
    };

    fetchAnalyticsInsights();
  }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Analytics Insights</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {analyticsInsights.map((analyticsInsight) => (
                    <li key={analyticsInsight.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {analyticsInsight.insight}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnalyticsInsightList;

export default AnalyticsInsightList;