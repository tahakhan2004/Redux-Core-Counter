const AddcounterAction = () =>{
    return (dispatch) => {
        dispatch({
            type : "ADD_COUNTER",
            // payload,
        })    
    }
}

const MinuscounterAction = () =>{
    return (dispatch) => {
        dispatch({
            type : "MINUS_COUNTER",
            // payload,
        })    
    }
}

export {AddcounterAction, MinuscounterAction}