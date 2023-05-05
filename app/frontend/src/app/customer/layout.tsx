'use client';
import { ReactNode } from 'react';
import { ProductContextProvider } from '../Context/store';

interface CustomerLayoutProps {
  children: ReactNode;
}

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <div>
      <ProductContextProvider>{children}</ProductContextProvider>
    </div>
  );
}
