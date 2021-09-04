import { useState } from 'react';

const useFields = () => {
	const [values, setValues] = useState();
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.id]: e.target.value,
		});
	};
	return {
		values,
		handleChange,
	};
};

export default useFields;
