'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import '../../CSS/LoginPage.css';

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [failedLogin, setFailedLogin] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  });
  const { push } = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setFailedLogin(false);
    event.preventDefault();
    const { email, password } = formValues;

    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const responseJson = await response.json();
      const userData = { ...responseJson.user, token: responseJson.token };
      localStorage.setItem('userdata', JSON.stringify(userData));

      if (responseJson.user.role === 'customer') push('/customer/products');
    } else {
      setFailedLogin(true);
    }
  };
  return (
    <div className="container-login">
      {/* insert logo here  */}
      <h1>ThiagoLivery</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Must be a valid email address"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setFormValues({ ...formValues, email: event.target.value })
          }
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          pattern=".{6,15}"
          title="Minimun of 6, maximum of 15 characters"
          placeholder="*******"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setFormValues({ ...formValues, password: event.target.value })
          }
        />

        <Button className="login-button" variant="contained" type="submit">
          Login
        </Button>
        <Button
          className="createacc-button"
          variant="contained"
          type="button"
          onClick={() => push('/register')}
        >
          Create Account
        </Button>
      </form>
      {failedLogin && <div>Invalid Credentials</div>}
    </div>
  );
}
