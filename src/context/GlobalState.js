import React,{createContext,useReducer} from 'react';

//Import the Reducer
import AppReducer from './AppReducer'

//Create the initial state
const initialState={
    transactions:[
        {id:1,description:"Income 1",transactionAmount:1000},
        {id:2,description:"Expense 1",transactionAmount:-100},
        {id:3,description:"Income 1",transactionAmount:2000},
        {id:4,description:"Expense 2",transactionAmount:-600}
    ]
}

//Create the Global Context
export const GlobalContext=createContext(initialState);

//Create a Provider for the Global Context
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    //Actions 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
//in order to use this action we have to pass 'deleteTransaction' it down in provider below
//and then we able to pull this out like we did in transactions



    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                deleteTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}