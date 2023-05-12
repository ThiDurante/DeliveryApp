import React from 'react';
import { Sale } from '../interfaces/interfaces';
import dateFormat from './utils/dateFormat';
import { OrderItem } from './OrderItem';

export default function OrderPainel({
  backToSale,
  sale,
  isVendor,
}: {
  backToSale: () => void;
  sale: { sale: Sale; index: number };
  isVendor: boolean;
}) {
  const handleStatus = async (status: string) => {
    const saleId = sale.sale.id;
    await fetch(`http://localhost:3001/api/sales/${status}/${saleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.reload();
  };
  return (
    <div>
      Order Details
      <div>
        <div className="painel-header">
          <div className="order-number">{sale.index + 1}</div>
          <div className="order-date">{dateFormat(sale.sale.sale_date)}</div>
          <div className="order-status">{sale.sale.status}</div>
          {isVendor && (
            <>
              <button onClick={() => handleStatus('preparing')}>
                Prepare Order
              </button>
              <button onClick={() => handleStatus('delivering')}>
                Delivering
              </button>
              <button onClick={() => backToSale()}>All Orders</button>
            </>
          )}
          {!isVendor && (
            <>
              <button onClick={() => handleStatus('delivered')}>
                Mark as Delivered
              </button>
              <button onClick={() => backToSale()}>All Orders</button>
            </>
          )}
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
                <OrderItem
                  key={index}
                  removeBtn={false}
                  product={product}
                  index={index}
                  item={Object.values(
                    sale.sale.sales.find((p) => +p.id === +product.id)
                      ?.Sales_Products as any,
                  ).splice(1)}
                />
              ))}
            </tbody>
          </table>
          <div className="address">
            {isVendor &&
              `${sale.sale.delivery_address}, ${sale.sale.delivery_number}`}
          </div>
          <div className="total-price">Total: R${sale.sale.total_price}</div>
        </div>
      </div>
    </div>
  );
}
