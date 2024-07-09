import React, { useContext } from "react";
import { CartContext } from "../feature/ContextProvider";

function Product({ product }) {
	const { dispatch } = useContext(CartContext);
	return (
		<div
			style={{
				background: "grey",
				color: "white",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<p>image</p>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<button onClick={() => dispatch({ type: "Add", product: product })}>
				add to cart
			</button>
		</div>
	);
}

export default Product;
