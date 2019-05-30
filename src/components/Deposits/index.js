import React from 'react';
import Deposit from 'components/Deposit';

export default function Deposits() {
  return (
    <div className="deposits">
      <Deposit deposit={{
        name: 'Тусовочный',
        cashback: '10%',
        period: '2 года'
      }}/>
      <Deposit deposit={{
        name: 'Студенческий',
        cashback: '2 %',
        period: '2 года'
      }}/>
      <Deposit deposit={{
        name: 'Молодежный',
        cashback: '8%',
        period: '1 год'
      }}/>
    </div>
  );
}