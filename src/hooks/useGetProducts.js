import { useEffect, useReducer } from "react";

const reducerObject = (state,newValue) => ({
    GET : {
        ...state,
        loading: false,
        products:newValue,

    }
})

const initialArg = {
    loading:true,
    products : [],
}

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
       return reducerObject(state,action.payload)[action.type];
    }else{
       return state;
    }
}


function useGetProduct(URL){
    const [state, dispatch] = useReducer(reducer, initialArg);

    const handlerGet = (products) =>{
        dispatch({ type: 'GET',payload : products})
    }
    
	useEffect(() => {
		const getResponse = async () => {
			const response = await fetch(URL);
            const data = await response.json();
            handlerGet(data);
		}
		getResponse();
	},[])

    return state;
}

export {useGetProduct};