import React,{createContext,useReducer} from 'react';

//Import the Reducer
import AppReducer from './AppReducer'

//Create the initial state
// const initialState={
//     transactions:[
//         {id:1,description:"Income 1",transactionAmount:1000},
//         {id:2,description:"Expense 1",transactionAmount:-100},
//         {id:3,description:"Income 1",transactionAmount:2000},
//         {id:4,description:"Expense 2",transactionAmount:-600}
//     ]
// }
const initialState={
    transactions:[]
}





//Create the Global Context
export const GlobalContext=createContext(initialState);

//Create a Provider for the Global Context
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    //Actions for delete the transaction
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
//in order to use this action we have to pass 'deleteTransaction' it down in provider below
//and then we able to pull this out like we did in transactions

    //Actions for add the transaction
    function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

    return(
        <GlobalContext.Provider value={
            {
                //from here we can access it through other components
                transactions:state.transactions,
                deleteTransaction,
                addTransaction 
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}