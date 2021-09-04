const InputText = ({ handleChange, name, id }) => (
	<>
		<input name={name} id={id} onChange={handleChange} />
		<style jsx>{`
			input {
				padding: 0.4rem 0.4rem;
				border: 0.1rem solid var(--purple-3);
				padding: 0.4rem;
				transition: border 0.4s ease-out;
				border-radius: 4px;
				background-color: var(--purple-2);
				font-size: 14px;
				letter-spacing: 1px;
				color:var(--black-1);
			}
			input:focus {
				border: 0.1rem solid var(--purple-1);
			}
		`}</style>
	</>
);
export default InputText;
