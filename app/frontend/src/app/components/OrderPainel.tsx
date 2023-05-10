import React from 'react';
import { Sale } from '../interfaces/interfaces';
import dateFormat from './utils/dateFormat';
import { OrderItem } from './OrderItem';

export default function OrderPainel({
  sale,
}: {
  sale: { sale: Sale; index: number };
}) {
  console.log('painel', sale);
  const handleMarkDelivered = async () => {};
  return (
    <div>
      Order Details
      <div>
        <div className="painel-header">
          <div className="order-number">{sale.index + 1}</div>
          <div className="order-date">{dateFormat(sale.sale.sale_date)}</div>
          <div className="order-status">{sale.sale.status}</div>
          <button onClick={handleMarkDelivered}>Mark as Delivered</button>
          <table>
            <thead>
              <tr>
                <td>Item</td>
                <td>Description</td>
                <td>Quantity</td>
                <td>Unit Value</td>
                <td>Sub-total</td>
              </tr>
            </thead>
            <tbody>
              {sale.sale.sales.map((product, index) => (
                <OrderItem key={index} product={product} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
