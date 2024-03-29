import React from 'react';

const CurrentBalanceCard = props => {
  return (
    <div className='card card-body add-task-points mb-2'>
      <div className='add-task-points-heading'>Your Current Balance</div>
      <span className='add-task-point-total'>124</span>
      <span className='add-task-point-curr'>Task Points</span>
    </div>
  );
};

export default CurrentBalanceCard;
