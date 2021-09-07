const InputText = ({
	handleChange,
	name,
	id,
	error = false,
	message,
	maxLength = 0,
	require = false,
}) => (
	<div>
		<input
			name={name}
			id={id}
			onChange={(e)=> handleChange(e,maxLength)}
		/>
		<span>{error ? message : ''}</span>
		<style jsx>{`
			div{
				display: flex;
				flex-direction: column;
				
				padding: .2rem;
			}
			input {
				padding: 0.4rem 0.4rem;
				border: 0.1rem solid ${error ? '#f92e2e' :' var(--purple-3)' };
				padding: 0.4rem;
				transition: border 0.4s ease-out;
				border-radius: 4px;
				background-color: var(--purple-2);
				font-size: 14px;
				letter-spacing: 1px;
				color: var(--black-1);
			}
			input:focus {
				border: 0.1rem solid ${error ? '#f92e2e' :' var(--purple-1)' };
			}
			span{
				font-size: .6rem;
				letter-spacing: 1px;
				font-weight: 400;
				color: #f92e2e;
				height: 1rem;
				padding: 0rem .2rem;
				display: flex;
				align-items: center;
			}
		`}</style>
	</div>
);
export default InputText;
