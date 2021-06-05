export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
                //payload has id pass from GlobalState.js   
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
            default:
            return state;
    }
}