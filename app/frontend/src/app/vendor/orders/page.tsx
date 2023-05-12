'use client';

import FullSaleCard from '@/app/components/FullSaleCard';
import { Navbar } from '@/app/components/NavBar';
import OrderPainel from '@/app/components/OrderPainel';
import { Sale } from '@/app/interfaces/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Orders() {
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
  const { push } = useRouter();
  const [vendor, setVendor] = useState({} as any);
  const [openOrder, setOpenOrder] = useState(false);
  const [salesData, setSalesData] = useState<Sale[]>([]);
  const [order, setOrder] = useState<{ sale: Sale; index: number }>({
    sale: inittialSaleState,
    index: 0,
  });

  // ! uncomment when token valid working
  // if (!vendor.token) {
  //   push('/logout')
  // }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const vendorData = localStorage.getItem('userdata');
      if (vendorData) {
        setVendor(JSON.parse(vendorData));
      }
    }
  }, []);

  useEffect(() => {
    if (vendor.id) {
      getOrders();
    }
  }, [vendor]);

  const getOrders = async () => {
    const response = await fetch(
      `http://localhost:3001/api/sales/user/${vendor.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${vendor.token}`,
        },
      },
    );
    const data = await response.json();
    setSalesData(data);
  };

  const handleOrder = (sale: Sale, index: number) => {
    setOpenOrder(!openOrder);
    setOrder({ sale, index });
  };

  const backToSale = () => {
    setOpenOrder(!openOrder);
  };

  return (
    <div>
      <Navbar vendor={vendor} />
      {!openOrder ? (
        <div className="sale-card-container">
          {Array.isArray(salesData) &&
            salesData.map((sale: any, index: number) => (
              <FullSaleCard
                key={index}
                index={index}
                sale={sale}
                handleOrder={handleOrder}
                address={true}
              />
            ))}
        </div>
      ) : null}
      {openOrder ? (
        <div>
          <OrderPainel sale={order} backToSale={backToSale} isVendor={true} />
        </div>
      ) : null}
    </div>
  );
}
