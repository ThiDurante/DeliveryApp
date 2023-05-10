import React from 'react';
import '../CSS/FullSaleCard.css';

interface Sale {
  id: number;
  status: string;
  total_price: number;
  sale_date: string;
  delivery_address: string;
  delivery_number: string;
  seller_id: number;
}

export default function FullSaleCard({
  index,
  sale,
}: {
  index: number;
  sale: Sale;
}) {
  const date = new Date(sale.sale_date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  const statusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'status-yellow';
      case 'Preparing':
        return 'status-green';
      case 'Delivered':
        return 'status-cyan';
      default:
        return 'status-red';
    }
  };
  return (
    <div className="order-card">
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
      </div>
    </div>
  );
}
