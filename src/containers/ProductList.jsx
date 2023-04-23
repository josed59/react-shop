import React from 'react';
import {useGetProduct} from '../hooks/useGetProducts';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
const URL = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const {loading,products} = useGetProduct(URL);
	if(loading){
		return <p>Loaging...</p>
	}
	else{
		return (
			<section className="main-container">
				<div className="ProductList">
					{
						products.map((product) => {
							return <ProductItem key={product.id} product={product}/>
						}) 
					}
				</div>
			</section>
		);
	}
}

export default ProductList;
