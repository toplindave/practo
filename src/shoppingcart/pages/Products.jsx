import React, { useState } from "react";
import Data from "../Data.json";
import Product from "../componentt/Product";

function Products() {
	const [products, setProducts] = useState(Data.products);
	// setProducts(products);
	return (
		<div
			style={{
				marginTop: "35px",
			}}>
			{products.map((p) => (
				<Product product={p} setProducts={setProducts} />
			))}
		</div>
	);
}

export default Products;
