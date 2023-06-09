'use client';
import { useProductContext } from '@/app/Context/store';
import { CheckoutProduct } from '@/app/components/CheckoutProduct';
import { Navbar } from '@/app/components/NavBar';
import { ProductCard } from '@/app/components/ProductCard';
import { useEffect, useState } from 'react';
import '../../CSS/CustomerProduct.css';

export interface Product {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

export default function CustomerProducts() {
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3001/api/products');
    const data = await response.json();

    setProducts(data);
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (products.length > 0) setLoaded(true);
  }, [products]);

  return (
    <div>
      <Navbar />
      <div className="product-card-container">
        {products.length > 0 &&
          products.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
      {products.length > 0 && <CheckoutProduct />}
    </div>
  );
}
