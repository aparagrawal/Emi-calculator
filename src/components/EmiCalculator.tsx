import React, { useEffect, useState } from "react";
import { tenure as tenureOptions } from "../utils/constants";

function EmiCalculator() {
	const [cost, setCost] = useState(0);
	const [fee, setFee] = useState(1);
	const [interest, setInterest] = useState(10);
	const [tenure, setTenure] = useState(12);
	const [emi, setEmi] = useState("0");
	const [downPayment, setDownPayment] = useState("0");

	const calculateEmi = (downPayment: number) => {
		if (!cost) return;
		const loanAmount = cost - downPayment;
		const rateofInterest = interest / 100;
		const numOfYears = tenure / 12;

		const finalEmi =
			(loanAmount + rateofInterest * (1 + rateofInterest) ** numOfYears) /
			((1 + rateofInterest) ** numOfYears - 1);

		return Number(finalEmi).toFixed(0);
	};

	useEffect(() => {
		if (!(cost > 0)) {
			setDownPayment("0");
			setEmi("0");
		}

		const emi = calculateEmi(Number(downPayment));
		setEmi(emi || "0");
	}, [tenure]);

	const calculatedp = (emi: number) => {
		if (!cost) return "0";

		const downPaymentpercent = 100 - (emi / Number(calculateEmi(0))) * 100;
		return Number((downPaymentpercent / 100) * cost).toFixed(0);
	};

	const updateEmi = (e: any) => {
		if (!cost) return;
		const dp = Number(e.target.value);
		setDownPayment(dp.toFixed(0));
		const emi = calculateEmi(dp);
		setEmi(emi || "0");
	};
	const updateDownPayment = (e: any) => {
		if (!cost) return;

		const emi = Number(e.target.value);
		setEmi(emi.toFixed(0));
		const dp = calculatedp(emi);
		setDownPayment(dp);
	};

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
			<span className="title" style={{ textDecoration: "underline" }}>
				Total down payment -{}
				{(
					Number(downPayment) +
					(cost - Number(downPayment)) * (fee / 100)
				).toFixed(0)}
			</span>
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
					<label>100</label>
				</div>
			</div>
			<span className="title">Loan per month</span>
			<span className="title" style={{ textDecoration: "underline" }}>
				Total Loan amount -{(Number(emi) * tenure).toFixed(0)}
			</span>
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
					<b>{emi}</b>
					<label>{calculateEmi(0)}</label>
				</div>
			</div>

			<span className="title">Tenure</span>
			<div className="tenure-container">
				{tenureOptions.map((item: any) => {
					return (
						<button
							className={`tenure ${item === tenure ? "selected" : ""}`}
							onClick={() => setTenure(item)}
						>
							{item}
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default EmiCalculator;
