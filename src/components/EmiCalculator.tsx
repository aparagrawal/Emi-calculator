import React, { useState } from "react";

function EmiCalculator() {
	const [cost, setCost] = useState(0);
	const [fee, setFee] = useState(1);
	const [interest, setInterest] = useState(10);
	const [tenure, setTenure] = useState(12);
	const [emi, stEmi] = useState(0);
	const [downPayment, setDownPayment] = useState(0);

	const updateEmi = () => {};
	const calculateEmi = (rate: number) => {
		return 0;
	};
	const updateDownPayment = () => {};

	return (
		<div className="App">
			<span className="title" style={{ fontSize: "30", marginTop: "10" }}>
				Emi calculator
			</span>
			<span className="title">Total cost of asset</span>
			<input
				value={cost}
				type="number"
				onChange={(e: any) => setCost(e.target.value)}
				placeholder="Total cost of asset"
			/>
			<span className="title">Interest rate (in %)</span>
			<input
				value={interest}
				type="number"
				onChange={(e: any) => setInterest(e.target.value)}
				placeholder="Interest rate"
			/>
			<span className="title">Prcessing fee</span>
			<input
				value={fee}
				type="number"
				onChange={(e: any) => setFee(e.target.value)}
				placeholder="Fee"
			/>
			<span className="title">Down payment</span>
			<div>
				<input
					type="range"
					min={0}
					max={cost}
					className="slider"
					value={downPayment}
					onChange={updateEmi}
				/>
				<div className="labels">
					<label>0%</label>
					<b>{downPayment}</b>
					<label>100%</label>
				</div>
			</div>
			<span className="title">Loan per month</span>
			<div>
				<input
					type="range"
					className="slider"
					min={calculateEmi(cost)}
					max={calculateEmi(0)}
					value={emi}
					onChange={updateDownPayment}
				/>
				<div className="labels">
					<label>{calculateEmi(cost)}</label>
					<b>{downPayment}</b>
					<label>{calculateEmi(0)}</label>
				</div>
			</div>

			<span className="title">Tenure</span>
		</div>
	);
}

export default EmiCalculator;
