'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
  name: string;
}

export default function Register() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    name: '',
  });
  const [failedRegister, setFailedRegister] = useState(false);
  const [failedMessage, setFailedMessage] = useState('');
  const { push } = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password, name } = formValues;

    try {
      const response = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });
      if (!response.ok) throw new Error(response.statusText);
      const responseJson = await response.json();
      const userData = { ...responseJson.user, token: responseJson.token };
      localStorage.setItem('userdata', JSON.stringify(userData));
      push('customer/products');
    } catch (error: any) {
      setFailedRegister(true);

      setFailedMessage(
        error.message === 'Conflict'
          ? 'Email already exists'
          : 'Please fill all the fields',
      );
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          placeholder="name"
          pattern=".{3,15}"
          title="Minimun of 6, maximum of 15 characters"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setFormValues({ ...formValues, name: event.target.value })
          }
        />
        <button type="submit">Register </button>
      </form>
      {failedRegister && <p>{failedMessage}</p>}
    </div>
  );
}
