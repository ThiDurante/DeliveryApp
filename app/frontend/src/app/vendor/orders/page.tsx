'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Orders() {
  const { push } = useRouter();
  const [orders, setOrders] = useState([]);
  const vendor = JSON.parse(localStorage.getItem('userdata') || '{}');
  // ! uncomment when token valid working
  // if (!vendor.token) {
  //   push('/logout')
  // }
  useEffect(() => {}, []);

  const getOrders = async () => {
    const response = await fetch(
      `http://localhost:3001/api/sales/${vendor.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${vendor.token}`,
        },
      },
    );
    const data = await response.json();
    setOrders(data);
  };
  return <div>Orders</div>;
}
