import useFields from '../hooks/useFields';
import Validaciones from '../lib/validaciones';
import userService from '../services/userService';
import { useRouter } from 'next/router';
import { useState } from 'react';
const useForm = () => {
	const { handleChange, values, setValues } = useFields();
	const [isLoading, setIsLoading] = useState();
	const router = useRouter();
	const name = values?.username?.value;

	const handleSudmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const { error, message, value } = Validaciones.ValidarUsername({
			username: name,
		});
		if (error) {
			setIsLoading(false);
			return setValues({
				username: { error, message },
			});
		}
		try {
			const res = await userService.isert(value);
			setValues({
				username: res,
			});
			return router.push(`/${value}`);
		} catch (error) {
			setIsLoading(false);
			return setValues({
				error: true,
				message: 'error service',
			});
		}
	};
	return {
		values,
		handleChange,
		handleSudmit,
		isLoading,
	};
};

export default useForm;
