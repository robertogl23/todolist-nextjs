const InputText = ({
	handleChange,
	name,
	id,
	error = false,
	message,
	maxLength = 0,
	minLength = 0,
	require = false,
}) => (
	<div>
		<input
			name={name}
			id={id}
			onChange={(e)=> handleChange(e,maxLength,minLength)}
		/>
		<span>{error ? message : ''}</span>
		<style jsx>{`
			div{
				display: flex;
				flex-direction: column;	
				min-width: 8rem;
			}
			input {
				padding: 0.4rem 0.4rem;
				border: 0.1rem solid ${error ? '#f92e2e' :' var(--purple-3)' };
				padding: 0.4rem;
				transition: border 0.4s ease-out;
				border-radius: 4px;
				background-color: ${error ? '#fff2f2' :' var(--purple-3)' };
				font-size: 14px;
				letter-spacing: 1px;
				color: var(--black-1);
			}
			input:focus {
				border: 0.1rem solid ${error ? '#f92e2e' :' var(--purple-1)' };
			}
			span{
				font-size: .5rem;
				letter-spacing: .8px;
				font-weight: 400;
				color: #f92e2e;
				height: .8rem;
				max-width: 100%;
				padding: 0rem .2rem;
				display: flex;
				align-items: center;
			}
		`}</style>
	</div>
);
export default InputText;
