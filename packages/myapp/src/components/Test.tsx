import { useEffect } from 'react';

const Test = () => {
	useEffect(() => {
		setTimeout(() => {
			throw new Error('error Test Compoennt !!!');
		}, 5000);
	}, []);

	return <div>test Component</div>;
};

export default Test;
