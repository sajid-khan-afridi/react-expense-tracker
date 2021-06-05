import React,{useContext} from 'react'

export const Transaction = ({transaction}) => {

    

    return (
        <div>
            <li className="plus">
                {/* Project 1 Income */}
                {transaction.description}
                <span>{transaction.transactionAmount}</span>
                <button className="delete-btn">X</button>
            </li>
        </div>
    )
}
