import useForm from '../hooks/useForm';
import BtnPrimary from './BtnPrimary';
import Card from './Card';
import InputText from './InputText';
import Loading from './Loading';
const UserForm = () => {
	const { handleSudmit, handleChange, values, isLoading } = useForm();

	return (
		<>
			<Card width='16rem' height='8rem'>
				{isLoading ? (
					<Loading message={'Validando'} />
				) : (
					<form className='f f-column' onSubmit={handleSudmit}>
						<label htmlFor='name'>Username:</label>

						<InputText
							name='username'
							id='username'
							handleChange={handleChange}
							error={values?.username?.error}
							message={values?.username?.message}
							maxLength={8}
							require={true}
							minLength={5}
						/>
						<BtnPrimary
							text='Entrar'
							width='2rem'
							type='submit'
							disabled={!values?.sudmit}
						/>
					</form>
				)}
			</Card>

			<style jsx>{`
				form {
					padding: 0.5rem 1rem;
					gap: 0.1rem;
				}
				label {
					font-weight: 600;
					letter-spacing: 1px;
					font-size: 12px;
					cursor: pointer;
					margin-bottom: 0.3rem;
				}
			`}</style>
		</>
	);
};

export default UserForm;
