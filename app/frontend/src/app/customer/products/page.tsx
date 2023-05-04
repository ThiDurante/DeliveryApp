'use client';
import { Navbar } from '@/app/components/NavBar';
import { ProductCard } from '@/app/components/ProductCard';

export default async function CustomerProducts() {
  const response = await fetch('http://localhost:3001/api/products');
  const products = await response.json();
  const cart = localStorage.getItem('cart');
  if (!cart) localStorage.setItem('cart', JSON.stringify({}));

  return (
    <div>
      <Navbar />
      {products.map((product: any) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
