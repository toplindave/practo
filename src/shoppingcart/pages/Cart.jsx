import React, { useContext } from "react";
import { CartContext } from "../feature/ContextProvider";
import CartProduct from "../componentt/CartProduct";
import { totalItem, totalPrice } from "../feature/CartReducer";
function Cart() {
	const { cart } = useContext(CartContext);
	const cartMap = cart.map((p) => <CartProduct product={p} />);
	return (
		<div
			style={{
				display: "flex",
				background: "yellow",
				marginTop: "20px",
			}}>
			<div className="product-con">{cartMap}</div>
			<div className="summ">
				<h5> total items:{totalItem(cart)} </h5>
				<h5> total price:${totalPrice(cart)}</h5>
				<button> checkout</button>
			</div>
		</div>
	);
}

export default Cart;
