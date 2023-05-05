'use client';

import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useProductContext } from '../Context/store';
import { Product } from '../customer/products/page';
import '../CSS/CustomerProduct.css';

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
    <Card
      className="card"
      onClick={handleCartChange}
      sx={{ maxWidth: 375, maxHeight: 357 }}
    >
      <CardActionArea>
        <CardMedia
          className="card-image"
          component="img"
          height="200"
          image={product.url_image}
          alt={product.name}
        />
        <div className="card-text">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card-title"
          >
            {product.name}
          </Typography>
          <div color="text.secondary" className="card-price">
            R${product.price}
          </div>
        </div>
      </CardActionArea>
      <div>
        <button className="card-btn" onClick={handleDecrement}>
          -
        </button>
        <span className="card-count">{quantity}</span>
        <button className="card-btn" onClick={handleIncrement}>
          +
        </button>
      </div>
    </Card>
  );
}
