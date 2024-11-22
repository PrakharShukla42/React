import React from 'react';

function User({ data }) {
  return (
    <div>
      <h1>User List</h1>
      {data.map((user, index) => (
        <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>{user.name}</h2>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}
export default User;
