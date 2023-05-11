import React from 'react';
import '../CSS/CustomerProduct.css';

export function OrderItem({
  item,
  index,
  handleRemove,
  product,
  removeBtn,
}: any) {
  console.log(item);

  return (
    <tr key={index}>
      <td className="checkout-item">{+index + 1}</td>
      <td className="checkout-desc">{product?.name}</td>
      <td className="checkout-quant">{item[1]}</td>
      <td className="checkout-unit">R${product?.price}</td>
      <td className="checkout-total">
        R$
        {product?.price ? (+product.price * Number(item[1])).toFixed(2) : 0}
      </td>
      {removeBtn && (
        <td
          onClick={() => handleRemove(product?.id)}
          className="checkout-remove"
        >
          Remove
        </td>
      )}
    </tr>
  );
}
