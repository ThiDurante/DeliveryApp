import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

export function OrderItem({ item, index, handleRemove, product }: any) {
  return (
    <tr key={index}>
      <td className="checkout-item">{+index + 1}</td>
      <td className="checkout-desc">{product?.name}</td>
      <td className="checkout-quant">{item[1]}</td>
      <td className="checkout-unit">R${product?.price}</td>
      <td className="checkout-total">
        R$
        {product?.price ? (product.price * Number(item[1])).toFixed(2) : 0}
      </td>
      <td onClick={() => handleRemove(product?.id)} className="checkout-remove">
        Remove
      </td>
    </tr>
  );
}