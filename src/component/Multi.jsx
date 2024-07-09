import React, { useState } from "react";

function Multi() {
	const [formstep, setFormStep] = useState(0);
	const nextStep = () => {
		setFormStep((cur) => cur + 1);
	};
	const prevStep = () => {
		setFormStep((cur) => cur - 1);
	};
	const renderBtn = () => {
		if (formstep > 2) {
			return undefined;
		} else if (formstep === 2) {
			return <button onClick={nextStep}>submit</button>;
		} else if (formstep > 0) {
			return (
				<>
					<button onClick={prevStep}>prev</button>;
					<button onClick={nextStep}>next</button>;
				</>
			);
		} else {
			return (
				<>
					<button onClick={nextStep}>next</button>;
				</>
			);
		}
	};
	return (
		<div className="multi">
			<h1>welcome to the page</h1>
			{formstep === 0 && (
				<>
					<p>1/3</p>

					<input type="email" placeholder="input your mail" />
				</>
			)}
			{formstep === 1 && (
				<>
					<p>2/3</p>
					<input type="name" placeholder="input your first name" />
				</>
			)}
			{formstep === 2 && (
				<>
					<p>3/3</p>
					<input type="name" placeholder="input your last name" />
				</>
			)}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
					// background: "black",
				}}>
				{renderBtn()}
			</div>
		</div>
	);
}

export default Multi;
