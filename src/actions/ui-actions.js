import { LOADING,LOADING_HISTORY } from "./Types";


export const loading=(loadingValue)=>{
return{
    type:LOADING,
    value:loadingValue
}
}



export const loadingHistory=(loadingValue)=>{
    return{
        type:LOADING_HISTORY,
        value:loadingValue
    }
    }
    
    
    
