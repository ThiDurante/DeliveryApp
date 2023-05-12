'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Logout() {
  const { push } = useRouter();
  useEffect(() => {
    localStorage.removeItem('userdata');
    localStorage.removeItem('cart');
    push('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
