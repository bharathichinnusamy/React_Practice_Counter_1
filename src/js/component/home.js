import React, { useState } from "react";

//create your first component
export function Home() {
	const [state, setState] = useState(0);
	function addition() {
		return setState(state + 1);
	}
	function substraction() {
		return setState(state - 1);
	}
	function multiplication() {
		return setState(state * 2);
	}
	return (
		<div>
			<div>
				count:
				{state}
			</div>
			<div>
				<button onClick={addition}>Add 1</button>
			</div>
			<div>
				<button onClick={substraction}>Minus 1</button>
			</div>
			<button onClick={multiplication}>Multiply 2</button>
		</div>
	);
}
