import React,{useContext} from 'react';
import '@styles/OrderItem.scss';
import AppContext from '@context/AppContext';
import close from "@icons/icon_close.png";

const OrderItem = ({product, indexValue}) => {
	const { removeFromCart } = useContext(AppContext);
	const handleClick = (index) => {
		removeFromCart(index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.tittle} />
			</figure>
			<p>{product.tittle}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => handleClick(indexValue)}/>
		</div>
	);
}

export default OrderItem;
