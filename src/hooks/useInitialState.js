

import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
        console.log(payload);
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

    const removeFromCart = (indexItem) => {
        console.log(state.cart);
		setState({
			...state,
			cart: state.cart.filter((item,index) => index !== indexItem)
		});
	};
   


	return {
		state,
		addToCart,
        removeFromCart
        
	}
}

export default useInitialState;