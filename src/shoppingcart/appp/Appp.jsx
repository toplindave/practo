import React from "react";
import Nav from "../componentt/Nav";
import Products from "../pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";

function Appp() {
	return (
		<div>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Products />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
					{/* <Products /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default Appp;
