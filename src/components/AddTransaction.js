import React, {useState} from 'react'

export const AddTransaction = () => {
    const [description, setDescription]=useState();
    const [transactionAmount, setTransactionAmount]=useState("")
    return (
        <div>
             <h3>Add New Transaction</h3>
             <form>
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
