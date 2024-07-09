import React, { useState } from "react";

function Buttonn() {
	const [load, setLoad] = useState(true);
	const btnText = load ? "loading..." : "click me!";
	function handleClick() {
		setLoad((prev) => !prev);
	}
	return (
		<div>
			<button onClick={handleClick}>{btnText}</button>
		</div>
	);
}

export default Buttonn;
