import React, { useState, useEffect } from 'react';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
            <h2 style={{ color: '#38beba', marginBottom: '20px', textAlign: 'center' }}>Projects</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {projects.map((project) => (
                    <li key={project.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        {project.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;