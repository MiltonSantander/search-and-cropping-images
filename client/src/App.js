import React from 'react';
import Image from './components/Image';

function App() {
	const [data, setData] = React.useState('');
	const [srcArray, setSrcArray] = React.useState([]);

	function handleInput(event) {
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
				setSrcArray(response);
			});
	}

	function createImage(props) {
		return(<Image
			key={props.id}
			src={props.src}
		/>);
	}

	return (
		<div className="container">
			<input onChange={handleInput} type="text" />
			<button onClick={submitData}>Search</button>
			{srcArray.map(createImage)}
		</div>
	);
}

export default App;