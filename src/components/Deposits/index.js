import React from 'react';
import Deposit from 'components/Deposit';

const Deposits = ({deposits}) => {
  const isDeposits = !!deposits.length;

  return (
    isDeposits && (
      <div className="deposits">
        {deposits.map(deposit => {
          return <Deposit deposit={deposit}/>
        })}
      </div>
    )
  );
}

export default Deposits;