import React from 'react';
// import Form from './components/Form';

function App() {
	const [data, setData] = React.useState('');

	function handleChange(event) {
		setData(event.target.value);
	}

	function submitData() {
		let requestConfigurationObject = {
			method: 'POST',
			body: JSON.stringify({ message: data }),
			headers: {
				'Content-Type': 'application/json'
			}
		};
		fetch('/api', requestConfigurationObject).then(res => res.json())
			.catch(error => console.error('Error:', error))
			.then((response) => {
				console.log(response);
				// response.src.map((chunk) => {
				// 	return console.log(chunk);
				// });
				// 		setData(srcString);

			});
	}
	// React.useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data.message));
	// }, []);

	return (
		<div className="container">
			<input onChange={handleChange} type="text" value={data} />
			<button onClick={submitData}>Search</button>
			{/* {!data ? "Loading..." : data} */}
			<p>{data}</p>
		</div>
	);
}

export default App;
