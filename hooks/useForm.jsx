import useFields from '../hooks/useFields';
import Validaciones from '../lib/validaciones';
import userService from '../services/userService';

const useForm = () => {
	const { handleChange, values, setValues } = useFields();
	const value = values?.username?.value;
	const handleSudmit = async (e) => {
		e.preventDefault();
		const { error, message } = Validaciones.ValidarUsername({
			username: value,
		});
		if (error) {
			return setValues({
				username: { error, message },
			});
		}
		try {
			const res = await userService.isert(value);
			return setValues({
				username: res,
			});
		} catch (error) {
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
	};
};

export default useForm;
