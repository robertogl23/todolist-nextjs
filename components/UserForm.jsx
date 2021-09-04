import useForm from '../hooks/useForm';
import BtnPrimary from './BtnPrimary';
import InputText from './InputText';

const UserForm = () => {
	const { handleSudmit, handleChange } = useForm();

	return (
		<>
			<form className='f f-column' onSubmit={handleSudmit}>
				<label htmlFor='name'>Username:</label>
				<InputText name='name' id='name' handleChange={handleChange} />
				<BtnPrimary text='Entrar' width='2rem' type='submit' />
			</form>
			<style jsx>{`
				form {
					padding: 0.5rem 1rem;
					gap: 0.5rem;
				}
				label {
					font-weight: 600;
					letter-spacing: 1px;
					font-size: 12px;
					cursor: pointer;
				}
			`}</style>
		</>
	);
};

export default UserForm;
