import { React, useState } from "react";

function Tenary() {
	// const bool = true;
	// if (bool) {
	// return <h1>true!</h1>;
	// }
	// return <h1>false!</h1>;

	//  with switch statement
	// const condition = "apple";
	// switch (condition) {
	// 	case "hi":
	// 		return <p> Hi !</p>;
	// 	case "apple":
	// 		return <p> 🍎</p>;
	// 	default: {
	// 		return <p>Error!</p>;
	// 	}
	// }

	// ternary component

	// const test = true;

	// this wont work
	// test ? return <p> true</p> : return <p> false</p>
	// test ? <p> true</p> : <p> false</p>;

	//  correct way
	// return test ? <p> True </p> : <p>False</p>;

	// logical Operators in components

	// const condition = true;

	// logical and
	// return condition && <h1>Hello!</h1>;

	// const condition = false;
	// if it true it wont  return anything it's like the opposite of the AND logic

	// return condition || <h1> hello, OR!</h1>;

	// nullish logic
	// const condition = true;

	// test condition if it is undefined or null  if its not return <h1>
	// return condition ?? <h1>Hello, nullish coalescing!</h1>;

	// conditional rendering with state
	const [inputState, setInputState] = useState("");

	function handleClick(e) {
		console.log(e.target.value);
		setInputState(e.target.value);
	}

	function renderPopUp() {
		switch (inputState) {
			case "meow":
				return <h1>😾</h1>;
			case "woof":
				return <h1>🐶</h1>;
			case "rawr":
				return <h1>🐯</h1>;
			default:
				return null;
		}
	}

	return (
		<>
			<label htmlFor="inputmeow">Meow</label>
			<input
				id="inputmeow"
				type="radio"
				name="demo"
				value="meow"
				onClick={handleClick}
			/>
			<label htmlFor="inputwoof">Woof</label>
			<input
				id="inputwoof"
				type="radio"
				name="demo"
				value="woof"
				onClick={handleClick}
			/>
			<label htmlFor="inputrawr">Rawr</label>
			<input
				id="inputrawr"
				type="radio"
				name="demo"
				value="rawr"
				onClick={handleClick}
			/>
			{renderPopUp()}
		</>
	);
}

export default Tenary;
