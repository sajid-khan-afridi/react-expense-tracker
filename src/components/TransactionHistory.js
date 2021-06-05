import React,{useContext} from 'react'

//Import the Global Context
import {GlobalContext} from '../context/GlobalState'

//Import Transactions
import {Transaction} from './Transaction'

export const TransactionHistory = () => {

    const {transactions}=useContext(GlobalContext);
    console.log("all the transactions", transactions)
    return (
        <div>
            <h3>Transaction History</h3>
        
        <ul className="list">

            {transactions.map(transaction=>(

                    <Transaction key={transaction.id} transaction={transaction} />
            ))}
            


            {/* <li className="plus">
                Project 1 Income
                <span>$1,000</span>
                <button className="delete-btn">X</button>
            </li>
            <li className="minus">
                Project 1 Salaries
                <span>-$500</span>
                <button className="delete-btn">X</button> 
            </li> */}
        </ul>
        </div>
    )
}
