import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmiCalculator from "./components/EmiCalculator";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<EmiCalculator />
		</>
	);
}

export default App;
