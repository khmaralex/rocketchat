import React from 'react';

export default function Deposits() {
  return (
    <div className="deposits">
      <div className="deposit">
        <div className="deposit__name">Тусовочный</div>
        <div className="deposit__cashback">10 %</div>
        <div className="deposit__period">2 года</div>
      </div>
      <div className="deposit">
        <div className="deposit__name">Студенческий</div>
        <div className="deposit__cashback">2 %</div>
        <div className="deposit__period">2 года</div>
      </div>
    </div>
  );
}