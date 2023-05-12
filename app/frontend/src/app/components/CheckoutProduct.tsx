'use client';

import { useEffect, useState } from 'react';
import { useProductContext } from '../Context/store';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import '../CSS/CustomerProduct.css';
import '../CSS/CheckoutPage.css';
import CloseIcon from '@mui/icons-material/Close';
import { OrderItem } from './OrderItem';
import { Product } from '../interfaces/interfaces';

interface Sale {
  total_price: number;
  user_id: number;
  delivery_address: string;
  delivery_number: string;
  sale_date: string;
  status: string;
  seller_id: number;
}

export function CheckoutProduct() {
  const [priceTotal, setPriceTotal] = useState(0);
  const [fullPage, setFullPage] = useState(false);
  const { products, cart, setCart } = useProductContext();
  const { push } = useRouter();
  const [address, setAddress] = useState({ Address: '', Number: '' });

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleRemove = (id: number | undefined) => {
    if (id) {
      const newCart = { ...cart };
      delete newCart[id];
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
    }
  };

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

  const handleClose = () => {
    setFullPage(false);
    window.location.reload();
  };

  const handleCheckout = () => {
    // organize all the data to insert a new sale
    const user = JSON.parse(localStorage.getItem('userdata') || '{}');
    if (user !== null && !user.id) {
      alert('Please, log in to proceed');
      push('/logout');
    }

    const soldProducts = Object.entries(cart).map((item) => {
      const sold = products.find((product) => +item[0] === +product.id);
      if (sold) {
        sold.quantity = +item[1];
      }
      return sold;
    });
    console.log(soldProducts);

    const sale = {
      total_price: priceTotal,
      user_id: user.id,
      delivery_address: address.Address,
      delivery_number: address.Number,
      sale_date: new Date().toLocaleDateString(),
      status: 'Pending',
      seller_id: 1,
      sales: soldProducts,
    };
    submitSale(sale);
    setCart({});
    localStorage.setItem('cart', JSON.stringify({}));
    push('/payment');
  };

  const submitSale = async (sale: Sale) => {
    console.log(sale);

    const response = await fetch('http://localhost:3001/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sale),
    });
    console.log(response);

    if (response.ok) {
      // push('/payment');
    } else {
      alert('Something went wrong, please try again');
    }
  };

  useEffect(() => {
    setPriceTotal(sumPrices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, cart]);

  if (!products) return <div>Checkout: R$0</div>;
  return (
    <div>
      {fullPage && (
        <div className="checkout-container fade-in-container">
          <div className="checkout-header">
            <h3>Checkout</h3>
            <div className="checkout-close">
              <CloseIcon
                className="checkout-close-icon"
                onClick={handleClose}
              />
            </div>
          </div>
          <div className="products-checkout">
            <table>
              <thead>
                <tr>
                  <td>Item</td>
                  <td>Description</td>
                  <td>Quantity</td>
                  <td>Unit Price</td>
                  <td>Total/Item</td>
                  <td>Remove Item</td>
                </tr>
              </thead>
              <tbody>
                {Object.entries(cart).map((item, index) => {
                  const product = products.find((p) => +item[0] === +p.id);
                  return (
                    <OrderItem
                      key={index}
                      removeBtn={true}
                      index={index}
                      product={product}
                      item={item}
                      handleRemove={handleRemove}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <h3>Details and Address</h3>
            <div className="checkout-address">
              <label htmlFor="Address">
                Address:
                <input type="text" name="Address" onChange={handleAddress} />
              </label>
              <label htmlFor="Number">
                Number:
                <input type="text" name="Number" onChange={handleAddress} />
              </label>
            </div>
          </div>
          <Button
            className="checkout-full"
            onClick={handleCheckout}
            variant="contained"
          >
            Proceed to Payment: R${priceTotal}
          </Button>
        </div>
      )}
      {!fullPage && (
        <Button
          className={fullPage ? 'checkout-full' : 'checkout-btn'}
          onClick={() => setFullPage(true)}
          variant="contained"
        >
          Checkout: R${priceTotal}
        </Button>
      )}
    </div>
  );
}
