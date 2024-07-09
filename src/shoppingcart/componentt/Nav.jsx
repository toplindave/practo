import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../feature/ContextProvider";

function Nav() {
	const { cart } = useContext(CartContext);
	return (
		<div
			style={{
				background: "grey",
				display: "flex",
				justifyContent: "space-between",
			}}>
			<Link to="/">
				<h1>shop</h1>
			</Link>
			<Link to="/cart">
				<button>cart {cart.length}</button>
			</Link>
		</div>
	);
}

export default Nav;
