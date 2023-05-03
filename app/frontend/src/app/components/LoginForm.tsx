'use client';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm () {
  const [failedLogin, setFailedLogin] = useState(false) 
  const [formValues, setFormValues] = useState<FormValues>({email:'', password:''})
  const  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault()
    const { email, password } = formValues
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }
    )
    if(response.status === 400) setFailedLogin(true)
    if(response.status === 200) redirect('/client/products')
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
        Email: 
        </label>
        <input type="email"
         placeholder="email"
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
         title="Must be a valid email address" />
         <label htmlFor="password">
        Password:
         </label>
        <input type="password"
          pattern=".{6,15}"      
          title="Minimun of 6, maximum of 15 characters"  
          placeholder="*******"/>
          
        <button type="submit">Login</button>     
        <button type="button">Create Account</button>     
      </form>
      {failedLogin && <div>Invalid Email</div>}
    </div>
  )
}