'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

interface cartItem {
  [key: number]: number;
}

interface ContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  cart: cartItem;
  setCart: Dispatch<SetStateAction<cartItem>>;
}

const ProductContext = createContext<ContextProps>({
  products: [],
  setProducts: (): Product[] => [],
  cart: {},
  setCart: (): cartItem => [],
});

export const ProductContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<cartItem>(() => {
    if (typeof window !== 'undefined') {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        return JSON.parse(cartData);
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
