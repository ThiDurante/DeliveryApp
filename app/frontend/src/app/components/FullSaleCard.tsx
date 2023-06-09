import React from 'react';
import '../CSS/FullSaleCard.css';
import dateFormat from './utils/dateFormat';
import { Sale } from '../interfaces/interfaces';

export default function FullSaleCard({
  index,
  sale,
  handleOrder,
  address,
}: {
  index: number;
  sale: Sale;
  handleOrder: (sale: Sale, index: number) => void;
  address: boolean;
}) {
  // const date = new Date(sale.sale_date);
  // const options: Intl.DateTimeFormatOptions = {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // };

  // const formattedDate = date.toLocaleDateString(undefined, options);
  const formattedDate = dateFormat(sale.sale_date);
  const statusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'status-yellow';
      case 'Preparing':
        return 'status-green';
      case 'Delivered':
        return 'status-cyan';
      case 'Delivering':
        return 'status-blue';
      default:
        return 'status-red';
    }
  };
  return (
    <div className="order-card" onClick={() => handleOrder(sale, index)}>
      <div className="order-order">
        <div>Order</div>
        <div className="order-index">{index + 1}</div>
      </div>
      <div className="order-body">
        <div className={`order-status ${statusColor(sale.status)}`}>
          {sale.status.toUpperCase()}
        </div>
        <div className="order-date-total">
          <div className="order-date">{formattedDate}</div>
          <div className="order-total">
            R${Number(sale.total_price).toFixed(2)}
          </div>
        </div>
        {address && (
          <div className="order-address">{`${sale.delivery_address}, ${sale.delivery_number}`}</div>
        )}
      </div>
    </div>
  );
}
