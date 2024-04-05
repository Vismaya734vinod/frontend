import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',backgroundImage:`url(/1_Nature_1.png)`,backgroundPosition:'center',backgroundSize:'cover',height:'787px',color:'white'}}>
      <h1>Welcome, {user}!</h1>
      <h2>This is your home page.</h2>
      <button style={{padding:'7px',borderRadius:'10px'}} onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
