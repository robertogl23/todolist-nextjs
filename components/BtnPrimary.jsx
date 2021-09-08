import Container from './Container';

const BtnPrimary = ({ text, width, height, type = 'click', disabled= false}) => (
	<>
		<Container height={height} width={width}>
			<button type={type} disabled={disabled}>{text}</button>
		</Container>
		<style jsx>{`
			button {
				padding: 0.4rem 0.8rem;
				border: none;
				background: var(--purple-1);
				color: var(--white-1);
				border-radius: 4px;
				font-size: 12px;
				letter-spacing: 1px;
				cursor: ${disabled ? 'not-allowed' : 'pointer'};
				box-shadow : var(--Shadow-1);
			}
			button:active {
				transform: scale(0.9);
			}
		`}</style>
	</>
);

export default BtnPrimary;
