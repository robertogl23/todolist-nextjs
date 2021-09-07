import useFields from '../hooks/useFields';
// import userDb from '../lib/userDb';

const useForm = () => {
	const { handleChange, values } = useFields();

	const handleSudmit = (e) => {
		e.preventDefault();
		// console.log(userDb.InsertUsers('values.username'));
	};
	return {
		values,
		handleChange,
		handleSudmit,
	};
};

export default useForm;
