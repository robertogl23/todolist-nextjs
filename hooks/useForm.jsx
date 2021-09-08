import useFields from '../hooks/useFields';
import Validaciones from '../lib/validaciones';
import userService from '../services/userService';
import { useRouter } from 'next/router'
const useForm = () => {
	const { handleChange, values, setValues } = useFields();
	const router = useRouter()
	const name = values?.username?.value;
	const handleSudmit = async (e) => {
		e.preventDefault();
		const { error, message,value } = Validaciones.ValidarUsername({
			username: name,
		});
		if (error) {
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
