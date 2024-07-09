import React, { useState } from "react";

function RenderMultiple() {
	const [details, setDetails] = useState([]);
	const [Names, setNames] = useState({
		firstname: "Tad",
		secondname: "Owen",
		age: "16",
		state: "chicago",
	});
	// const [secondName, setSecondName] = useState("");
	// const [age, setAge] = useState("");
	// const [state, setState] = useState("");
	const firstName = Names.firstname;
	const secondName = Names.secondname;
	const age = Names.age;
	const states = Names.state;
	// console.log(Names);
	// const allDet = { firstName, secondName, age, state };
	function handleName(e) {
		setNames(e.target.value);
		// console.log(Names);
	}
	// function inputSecondName(e) {
	// 	setSecondName(e.target.value);
	// }
	// function inputAge(e) {
	// 	setAge(e.target.value);
	// }
	// function inputState(e) {
	// 	setState(e.target.value);
	// }

	function handleSubmit() {
		setDetails((prev) => [...prev, Names]);
		// setAge("");
		// setFirstName("");
		// setSecondName("");
		// setState("");
		console.log(details);
	}

	const displayDetails = details.map((detail, idx) => {
		return (
			<div key={idx}>
				<h1>{detail}</h1>
			</div>
		);
	});
	return (
		<div>
			<input
				type="text"
				placeholder="First Name "
				value={firstName}
				onChange={handleName}
			/>
			<input
				type="text"
				placeholder="Second Name "
				value={secondName}
				onChange={handleName}
			/>
			<input
				type="text"
				placeholder=" Your age "
				value={age}
				onChange={handleName}
			/>
			<input
				type="text"
				placeholder="State"
				value={states}
				onChange={handleName}
			/>
			<button onClick={handleSubmit}>Submit Details</button>

			<div className="details">{displayDetails}</div>
		</div>
	);
}

export default RenderMultiple;
