import React, { useContext } from "react";
import { CartContext } from "../feature/ContextProvider";

function CartProduct({ product }) {
	const { cart, dispatch } = useContext(CartContext);

	const Increase = (id) => {
		const Index = cart.findIndex((p) => p.id === id);
		if (cart[Index].quantity < 10) {
			dispatch({ type: "Increase", id: id });
		}
	};
	const Decrease = (id) => {
		const Index = cart.findIndex((p) => p.id === id);
		if (cart[Index].quantity > 1) {
			dispatch({ type: "Decrease", id: id });
		}
	};
	return (
		<div
			style={{
				display: "flex",
				background: "grey",
				justifyContent: "space-between",
				alignItems: "center",
				width: "900px",
				color: "white",
				// marginTop: "10px",
			}}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<p
					style={{
						marginRight: "90px",
					}}>
					{product.title}
				</p>
				<p>${product.price}</p>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<button onClick={() => Decrease(product.id)}>-</button>
				{product.quantity}
				<button onClick={() => Increase(product.id)}>+</button>
			</div>
			<button onClick={() => dispatch({ type: "Remove", id: product.id })}>
				Remove
			</button>
		</div>
	);
}

export default CartProduct;
