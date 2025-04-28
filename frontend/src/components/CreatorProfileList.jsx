import React, { useState, useEffect } from 'react';

const CreatorProfileList = () => {
  const [creatorProfiles, setCreatorProfiles] = useState([]);

  useEffect(() => {
    const fetchCreatorProfiles = async () => {
      try {
        const response = await fetch('/creator-profiles/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCreatorProfiles(data);
      } catch (error) {
        console.error('Failed to fetch creator profiles:', error);
      }
    };

    fetchCreatorProfiles();
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Creator Profiles</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
        {creatorProfiles.map((creatorProfile) => (
          <li key={creatorProfile.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
            {creatorProfile.first_name} {creatorProfile.last_name} ({creatorProfile.email})
                    </li>
        ))}
      </ul>
    </div>
  );
};

export default CreatorProfileList;