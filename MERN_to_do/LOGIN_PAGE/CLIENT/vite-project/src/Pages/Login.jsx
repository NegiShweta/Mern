import React from 'react'
import { useState } from 'react'
export default function Login() {

  const[data, setData] = useState({
    email: ' ' ,
    password: '' ,
  })
  const LoginUser = async(e) =>{

    e.preventDefault();
  }
  return (
    <form onSubmit={LoginUser}>
      <div>
    <label >Email</label>
      <input type="email" placeholder="email" value={data.email} onChange={(e) => setData({...data,email: e.target.value})} />
    </div>
      
    <div>
    <label >Password</label>
    <input type="password" placeholder="password"  value={data.password}  onChange={(e) => setData({...data,password: e.target.value})}/>
    </div>
      
      <button type='Submit'>Log in</button>
    </form>
  
  )
}
