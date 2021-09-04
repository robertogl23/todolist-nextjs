import useFields from '../hooks/useFields';

const useForm = () => {
	const { handleChange, values } = useFields();

	const handleSudmit = (e) => {
		e.preventDefault();
		console.log(values);
	};
	return {
		values,
		handleChange,
		handleSudmit,
	};
};

export default useForm;
