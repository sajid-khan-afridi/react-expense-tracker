import React,{createContext,useReducer} from 'react';

//Create the initial state
const initialState={
    transactions:[
        {id:1,description:"Income 1",transactionAmount:1000},
        {id:2,description:"Expense 1",transactionAmount:-100},
        {id:3,description:"Income 1",transactionAmount:2000},
        {id:4,description:"Expense 2",transactionAmount:-500}
    ]
}