import React, { useState, useEffect } from 'react';

const ProjectAssetList = () => {
  const [projectAssets, setProjectAssets] = useState([]);

  useEffect(() => {
    const fetchProjectAssets = async () => {
      try {
        const response = await fetch('/project-assets/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjectAssets(data);
      } catch (error) {
        console.error('Failed to fetch project assets:', error);
      }
    };

    fetchProjectAssets();
  }, []);

  return (
    <div>
      <h2>Project Assets</h2>
      <ul>
        {projectAssets.map((projectAsset) => (
          <li key={projectAsset.id}>
            {projectAsset.asset_url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectAssetList;