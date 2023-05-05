'use client';

import { useEffect, useState } from 'react';
import { useProductContext } from '../Context/store';

interface Product {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

export function CheckoutProduct() {
  const [priceTotal, setPriceTotal] = useState(0);
  const { products, cart } = useProductContext();

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
  return <div>Checkout: R${priceTotal}</div>;
}
