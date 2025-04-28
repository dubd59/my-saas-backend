import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/users/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
        <h2>Users</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {users.map((user) => (
                <li key={user.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                    {user.first_name} {user.last_name} ({user.email})
                </li>
            ))}
        </ul>
    </div>
  );
};

export default UserList;