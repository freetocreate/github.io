import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Register = () => {
  const [error, setError] = useState('');
  const [memberId, setMemberId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      memberId,
      username,
      email,
      password,
      phonenumber,
      birthdate,
    };

    try {
      const response = await axios.post('/api/register', registerData);

      if (response.data.success) {
        // Registration successful, navigate to the desired page
        router.push(`/page/Profile?email=${email}`);
      } else {
        // Registration failed, display the error message
        setError(response.data.message);
      }
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="memberId">Member ID</label>
          <input
            type="text"
            id="memberId"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="text"
            id="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
