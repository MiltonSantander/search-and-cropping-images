import React from 'react';
// import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

function App() {
	const [data, setData] = React.useState('');

	function handleChange(event) {
		setData(event.target.value);
	}

	function submitData() {
		console.log(data);
		fetch('/api', {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(data), // data can be `string` or {object}!
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.catch(error => console.error('Error:', error))
			.then(response => console.log('Success:', response));
	}
	// React.useEffect(() => {
	//   fetch("/api")
	//     .then((res) => res.json())
	//     .then((data) => setData(data.message));
	// }, []);

	return (
		<div className="container">
			<input onChange={handleChange} type="text" value={data} />
			<button onClick={submitData}>Search</button>
			{/* {!data ? "Loading..." : data} */}
		</div>
	);
}

export default App;
