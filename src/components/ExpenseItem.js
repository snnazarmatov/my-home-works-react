import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    let expenseDate = props.date;
    let expenseTitle = props.title;
    let expenseAmount = props.amount;

  return (
    <div className='expense-item'>
        <ExpenseDate date={expenseDate}/>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__price'>{expenseAmount}som</div>
        </div>
    </div>
  )
}

export default ExpenseItem