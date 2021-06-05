import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [description, setDescription]=useState();
    const [transactionAmount, setTransactionAmount]=useState("")

    const {addTransaction}=useContext(GlobalContext)
    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            description,
            transactionAmount: +transactionAmount 
        }
        addTransaction(newTransaction)
    }

    return (
        <div>
             <h3>Add New Transaction</h3>
             <form onSubmit={onSubmit}>
                 <div className="form-control">
                     <label htmlFor="description">
                         description
                     </label>
                     <input type="text" id="description" placeholder="Detail of Transaction"
                     onChange={(e)=>setDescription(e.target.value)}
                     value={description} />
                 </div>
                 <div className="form-control">
                     <label htmlFor="transactionamount">
                         Transaction Amount
                     </label>
                     <input type="number" id="transactionamount" placeholder="Detail of Transaction" 
                     onChange={(e)=>setTransactionAmount(e.target.value)} 
                     value={transactionAmount} />
                 </div>
                 <button className="btn">
                     Add Transaction
                 </button>
             </form>
        </div>
    )
}
