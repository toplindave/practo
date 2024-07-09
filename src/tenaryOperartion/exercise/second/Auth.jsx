import React, { useState } from "react";

function Auth() {
	const [password, setPassword] = useState("");

	const pText =
		password === "secret" ? "Successfully logged in" : "Enter correct password";

	function handleChange(event) {
		setPassword(event.target.value);
	}
	return (
		<div>
			<input type="text" onChange={handleChange} />
			<p>{pText}</p>
		</div>
	);
}

export default Auth;
