import React, { useState, useEffect } from 'react';

const CreatorPortfolioList = () => {
  const [creatorPortfolios, setCreatorPortfolios] = useState([]);

  useEffect(() => {
    const fetchCreatorPortfolios = async () => {
      try {
        const response = await fetch('/creator-portfolios/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCreatorPortfolios(data);
      } catch (error) {
        console.error('Failed to fetch creator portfolios:', error);
      }
    };

    fetchCreatorPortfolios();
  }, []);

  return ( <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Creator Portfolios</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {creatorPortfolios.map((creatorPortfolio) => (
                    <li key={creatorPortfolio.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {creatorPortfolio.title} - {creatorPortfolio.creator_id}
                    </li>
                ))}
            </ul>
        </div>


    </div>
  );
};

export default CreatorPortfolioList;