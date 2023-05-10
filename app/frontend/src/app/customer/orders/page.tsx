'use client';
import { useProductContext } from '@/app/Context/store';
import FullSaleCard from '@/app/components/FullSaleCard';
import { Navbar } from '@/app/components/NavBar';
import React, { useEffect, useState } from 'react';
import '../../CSS/FullSaleCard.css';
import OrderPainel from '@/app/components/OrderPainel';
import { Sale, UserData } from '@/app/interfaces/interfaces';

export default async function Orders() {
  const { user } = useProductContext() as { user: UserData };
  const [openOrder, setOpenOrder] = useState(false);
  const [salesData, setSalesData] = useState<Sale[]>([]);
  const [sale, setSale] = useState<Sale>();

  useEffect(() => {
    fetchSales().then((data) => setSalesData(data));
  }, []);
  const fetchSales = async () => {
    const sales = await fetch(
      `http://localhost:3001/api/sales/user/${user?.id}`,
    );
    const salesData = await sales.json();
    return salesData;
  };

  const handleOrder = (sale: Sale) => {
    setOpenOrder(!openOrder);
    setSale(sale);
  };

  return (
    <div>
      <Navbar />
      {!openOrder ? (
        <div className="sale-card-container">
          {Array.isArray(salesData) &&
            salesData.map((sale: any, index: number) => (
              <FullSaleCard
                key={index}
                index={index}
                sale={sale}
                handleOrder={handleOrder}
              />
            ))}
        </div>
      ) : null}
      {openOrder ? (
        <div>
          <OrderPainel sale={sale} />
        </div>
      ) : null}
    </div>
  );
}
