import React from 'react';

export default function OrderPainel() {
  return (
    <div>
      Order Details
      <div>
        <div className="painel-header">
          <div className="order-number">Order Number</div>
          <div className="order-date">Order Date</div>
          <div className="order-status">Order Status</div>
          <button>Mark as Delivered</button>
        </div>
      </div>
    </div>
  );
}
