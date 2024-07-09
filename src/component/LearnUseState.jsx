import React from "react";
import { useState } from "react";

function LearnUseState() {
	// const [textColor, setTextColor] = useState("black");

	// const toggleText = () => {
	// 	setTextColor(textColor === "black" ? "red" : "black");
	// };

	const [count, setCount] = useState(0);

	const increase = () => {
		setCount(count + 1);
		// setCount(console.log(count));
	};
	const decrease = () => {
		setCount(count - 1);
	};
	const reset = () => {
		setCount(0);
	};

	return (
		<div>
			{/* <button onClick={toggleText}>Show/Hide</button>
			<h1
				style={{
					color: textColor,
				}}>
				Hi my name is pedro
			</h1> */}

			<button onClick={increase}>increase</button>
			<button onClick={decrease}>decrease</button>
			<button onClick={reset}>Set to zero</button>

			{count}
		</div>
	);
}

export default LearnUseState;
