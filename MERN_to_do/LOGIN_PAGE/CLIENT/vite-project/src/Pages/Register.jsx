import React from 'react'
import { useState } from 'react'

export default function Register() {

  const[data, setData] = useState({

    name: ""  ,
    email: "" ,
    password: "" ,
    
  })
  const registerUser = async(e) =>{

    e.preventDefault()
  }
  return (
    <>
    <form onSubmit={registerUser}>
    <div>
      <label >Name</label>
      <input type="text" placeholder = "name " value={data.name} onChange={(e) => setData({...data,name: e.target.value})}/>
    </div>
    <div>
    <label >Email</label>
      <input type="email" placeholder="email" value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
    </div>
      
    <div>
    <label >Password</label>
    <input type="password" placeholder="password" value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
    </div>
      
      <button type='Submit'>Register</button>
    </form>
    
    </>
    
  )
}
