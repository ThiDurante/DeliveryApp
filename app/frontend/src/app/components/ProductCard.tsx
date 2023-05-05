'use client';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useProductContext } from '../Context/store';
import { Product } from '../customer/products/page';

export function ProductCard({ product }: { product: Product }) {
  const { cart, setCart } = useProductContext();
  const [quantity, setQuantity] = useState(cart[product.id] || 0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    const newCart = { ...cart, [product.id]: quantity + 1 };
    setCart(newCart);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const newCart = { ...cart, [product.id]: quantity - 1 };
      setCart(newCart);
    } else {
      const newCart = { ...cart };
      delete newCart[product.id];
      setCart(newCart);
      setQuantity(0);
    }
  };

  const handleCartChange = () => {};

  return (
    <Card onClick={handleCartChange} sx={{ maxWidth: 375, maxHeight: 357 }}>
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
