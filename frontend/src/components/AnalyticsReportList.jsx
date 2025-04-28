import React, { useState, useEffect } from 'react';

const AnalyticsReportList = () => {
  const [analyticsReports, setAnalyticsReports] = useState([]);

  useEffect(() => {
    const fetchAnalyticsReports = async () => {
      try {
        const response = await fetch('/analytics-reports/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAnalyticsReports(data);
      } catch (error) {
        console.error('Failed to fetch analytics reports:', error);
      }
    };

    fetchAnalyticsReports();
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Analytics Reports</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {analyticsReports.map((analyticsReport) => (
                    <li key={analyticsReport.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {analyticsReport.report_date} - {analyticsReport.creator_id}
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default AnalyticsReportList;