import React, { useState } from "react";

function Name() {
	const [names, setNames] = useState([]);
	const [inputText, setInputText] = useState("");
	function addName() {
		setNames((prev) => [...prev, inputText]);
		setInputText("");
	}
	function handleInput(e) {
		setInputText(e.target.value);
	}
	// alternative logic
	const pName = names
		.filter((name) => name.startsWith("A"))
		.map((name, idx) => {
			return <p key={idx}>{name}</p>;
		});

	// or
	// but this will rerender every time
	function generateName() {
		return names
			.filter((name) => name.startsWith("A"))
			.map((name, idx) => {
				return <p key={idx}>{name}</p>;
			});
	}

	return (
		<div>
			<input type="text" value={inputText} onChange={handleInput} />
			<button onClick={addName}> submit</button>

			{/* instead of doing all the logic in the jsx move it up */}
			{/* {names
				.filter((name) => name.startsWith("A"))
				.map((name, idx) => {
					return <p key={idx}>{name}</p>;
				})} */}
			{pName}
			{generateName()}
		</div>
	);
}

export default Name;
