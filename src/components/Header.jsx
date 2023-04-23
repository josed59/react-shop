import React , { useContext} from 'react';
import '@styles/Header.scss';
import {Menu} from '@components/Menu';
import menuIcon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import MyOrder from '../containers/MyOrder'



const Header = () => {
	const [toggle, setToggle] = React.useState(false);
	const [toggleOrders, setToggleOrders] = React.useState(false);
	const { state : {cart} } = useContext(AppContext);	
	const handleClick = () => {
		setToggle(!toggle);
    };

	return (
		<>
		<nav>
			<img src={menuIcon} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleClick}>platzi@example.com</li>
					<li 
						className="navbar-shopping-cart"
						onClick={() =>{setToggleOrders(!toggleOrders)}}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length > 0 ? <div>{cart.length}</div> : null}
					</li>
				</ul>
			</div>
		</nav>
			{toggleOrders &&  <MyOrder />}
			{toggle &&  <Menu />}
		</>
	);
}

export default Header;
