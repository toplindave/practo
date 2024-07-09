import React from "react";

function Button({ loading }) {
	const buttonText = loading ? "loading..." : "click me!";
	return (
		<div>
			{/* <button>{loading ? "loading..." : "click me!"}</button> */}

			{/* alternative */}

			<button>{buttonText}</button>
		</div>
	);
}

export default Button;
