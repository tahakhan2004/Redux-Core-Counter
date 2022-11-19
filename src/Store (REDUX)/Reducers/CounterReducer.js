const INITIALSTATE = {
        globalCounter : 0,
}

const counterReducer = (state = INITIALSTATE, action) => {
     switch (action.type){
        case "ADD_COUNTER":
           return {
                globalCounter : ++state.globalCounter,
           }     

     case "MINUS_COUNTER":
        return {
             globalCounter : --state.globalCounter,
        }     
     default:
        return {
         ...state
        }   
}
}
export {counterReducer}
