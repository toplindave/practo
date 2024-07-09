import React, { useState } from "react";

function FirstLesson() {
	const [state, setState] = useState({ count: 4, theme: "blue" });
	const count = state.count;
	const theme = state.theme;

	// this is not idea
	// rather create count state and themestate individually

	function decreamentCount() {
		setState((prevState) => {
			return { ...prevState, count: prevState.count - 1 };
		});
	}
	function increamentCount() {
		setState((prevState) => {
			return { ...prevState, count: prevState.count + 1 };
		});
	}
	return (
		<div>
			<button onClick={decreamentCount}>-</button>
			<span> {count} </span>
			<span> {theme} </span>
			<button onClick={increamentCount}>+</button>
		</div>
	);
}

export default FirstLesson;
