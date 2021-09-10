import { useState } from 'react';

const useFields = () => {
	const [values, setValues] = useState();

	const handleChange = (e, maxLength,minLength) => {
		const value = e.target.value;
		if (value.length > maxLength || value.length < minLength) {
			return setValues({
				...values,
				[e.target.id]: {
					value,
					message: 'Campo invalido',
					error: true,
				},
				sudmit: false,
			});
		}
		setValues({
			...values,
			[e.target.id]: {
				value,
				message: 'ok',
				error: false,
			},
			sudmit: true,
		});
	};

	return {
		values,
		handleChange,
		setValues
	};
};

export default useFields;
