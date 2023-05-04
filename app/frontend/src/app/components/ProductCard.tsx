'use client';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export function ProductCard({ product }: any) {
  const cart = JSON.parse(localStorage.getItem('cart') || '{}');

  const [quantity, setQuantity] = useState(cart[product.quantity] || 0);
  const handleIncrement = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');

    setQuantity(quantity + 1);
    const newCart = { ...cart, [product.id]: quantity + 1 };
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleDecrement = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');

    if (quantity > 1) {
      setQuantity(quantity - 1);
      const newCart = { ...cart, [product.id]: quantity - 1 };
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      delete cart[product.id];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  return (
    <Card sx={{ maxWidth: 375, maxHeight: 357 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.url_image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            R${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </Card>
  );
}
