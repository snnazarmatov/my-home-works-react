import React from "react";
import ExpenseItem from './ExpenseItem'; 
import './Expenses.css';
import Card from '../UI/Card'


const  Expenses = (props) => {
    return<Card className="expenses">
        <div className='cady'>
           
            {
                props.expenses.map((el) => {
                    return<ExpenseItem 
                        title ={el.title}
                        amount = {el.amount}
                        date = {el.date}
                    />
                })
            }
            </div>
            </Card>
    
}
export default Expenses;