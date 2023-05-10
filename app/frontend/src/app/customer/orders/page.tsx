'use client';
import { useProductContext } from '@/app/Context/store';
import FullSaleCard from '@/app/components/FullSaleCard';
import { Navbar } from '@/app/components/NavBar';
import React from 'react';
import '../../CSS/FullSaleCard.css';

interface UserData {
  id: number;
}

export default async function Orders() {
  const { user } = useProductContext() as { user: UserData };

  const sales = await fetch(`http://localhost:3001/api/sales/user/${user.id}`);
  const salesData = await sales.json();
  console.log(salesData);

  return (
    <div>
      <Navbar />
      <div className="sale-card-container">
        {salesData.map((sale: any, index: number) => (
          <FullSaleCard key={index} index={index} sale={sale} />
        ))}
      </div>
    </div>
  );
}
