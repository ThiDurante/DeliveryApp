'use client';
import { useProductContext } from '@/app/Context/store';
import FullSaleCard from '@/app/components/FullSaleCard';
import { Navbar } from '@/app/components/NavBar';
import React, { useEffect, useState } from 'react';
import '../../CSS/CheckoutPage.css';
import OrderPainel from '@/app/components/OrderPainel';
import { Sale, UserData } from '@/app/interfaces/interfaces';

export default async function Orders() {
  const inittialSaleState = {
    id: 0,
    status: '',
    total_price: 0,
    sale_date: '',
    delivery_address: '',
    delivery_number: '',
    seller_id: 0,
    sales: [],
  };
  const { user } = useProductContext() as { user: UserData };
  const [openOrder, setOpenOrder] = useState(false);
  const [salesData, setSalesData] = useState<Sale[]>([]);
  const [sale, setSale] = useState<{ sale: Sale; index: number }>({
    sale: inittialSaleState,
    index: 0,
  });

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

  const handleOrder = (sale: Sale, index: number) => {
    setOpenOrder(!openOrder);
    setSale({ sale, index });
  };

  const backToSale = () => {
    setOpenOrder(!openOrder);
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
                address={false}
              />
            ))}
        </div>
      ) : null}
      {openOrder ? (
        <div>
          <OrderPainel sale={sale} backToSale={backToSale} />
        </div>
      ) : null}
    </div>
  );
}
