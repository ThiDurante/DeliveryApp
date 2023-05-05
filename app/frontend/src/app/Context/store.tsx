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

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

interface ContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  cart: cartItem;
  setCart: Dispatch<SetStateAction<cartItem>>;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const ProductContext = createContext<ContextProps>({
  products: [],
  setProducts: (): Product[] => [],
  cart: {},
  setCart: (): cartItem => [],
  user: { id: 0, name: '', email: '', password: '', role: '' },
  setUser: (): User => ({ id: 0, name: '', email: '', password: '', role: '' }),
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
  const [user, setUser] = useState<User>(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('userdata');
      if (userData) {
        return JSON.parse(userData);
      }
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, cart, setCart, user, setUser }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
