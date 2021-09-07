import { useState } from 'react';

const useFields = () => {
	const [values, setValues] = useState();

	const handleChange = (e, maxLength) => {
		const value = e.target.value;
		if (value.length > maxLength) {
			return setValues({
				...values,
				[e.target.id]: {
					value,
					message: 'error max length',
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
	};
};

export default useFields;
