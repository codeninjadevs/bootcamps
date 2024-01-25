import { useState } from "react";

export default function App() {
	return (
		<div>
			<Header></Header>
			<Counter />
			<FruitList />
			<Video />
			<MyImage />
			<MyRelevantTable />
		</div>
	);
}

function Counter() {
	// const [a, b] = [80, () => {}]
	// hook: useState
	const [count, setCount] = useState(85);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div
			style={{
				background: "#f1f1f1",
				width: 350,
				padding: 24,
				borderRadius: 10,
				textAlign: "center",
			}}
		>
			<div>
				<h1>{count}</h1>
			</div>
			<div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
				<button onClick={increment}>Add +1</button>
				<button onClick={decrement}>Remove -1</button>
			</div>
		</div>
	);
}

function Header() {
	return <h1 style={{ color: "red" }}>Hello</h1>;
}

function FruitList() {
	return (
		<ul>
			<li>Apple</li>
			<li>Orange</li>
			<li>Jackfruit</li>
		</ul>
	);
}

function Video() {
	return (
		<video width="400" controls>
			<source
				src="https://www.w3schools.com/tags/mov_bbb.mp4"
				type="video/mp4"
			/>
			Your browser does not support HTML video.
		</video>
	);
}

function MyImage() {
	return <img src="https://dummyimage.com/600x400/000/fff" alt="" />;
}

function MyRelevantTable() {
	return (
		<table border="1" style={{ border: "1px solid black" }}>
			<tbody>
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
			</tbody>
		</table>
	);
}

function TableRow() {
	return (
		<tr style={{ border: "1px solid black" }}>
			<td>Data 1</td>
			<td>Data 2</td>
		</tr>
	);
}
