'use client';

import { useEffect, useState } from 'react';
import { useProductContext } from '../Context/store';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import '../CSS/CustomerProduct.css';

interface Product {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

export function CheckoutProduct() {
  const [priceTotal, setPriceTotal] = useState(0);
  const { products, cart } = useProductContext();
  const { push } = useRouter();

  const sumPrices = (): number => {
    const arrOfCart = Object.entries(cart);
    const sumOfPrices = arrOfCart
      .map((item) => {
        const product = products.find(
          (product: Product) => Number(product.id) === Number(item[0]),
        ) as Product;
        return product.price * Number(item[1]);
      })
      .reduce((acc, curr) => +acc + +curr, 0);
    return Number(sumOfPrices.toFixed(2));
  };

  useEffect(() => {
    setPriceTotal(sumPrices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, cart]);

  if (!products) return <div>Checkout: R$0</div>;
  return (
    <div>
      <Button
        className="checkout-btn"
        onClick={() => push('/customer/checkout')}
        variant="contained"
      >
        Checkout: R${priceTotal}
      </Button>
    </div>
  );
}
