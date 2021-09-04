import Container from './Container';

const BtnPrimary = ({ text, width, height, type = 'click' }) => (
	<>
		<Container height={height} width={width}>
			<button type={type}>{text}</button>
		</Container>
		<style jsx>{`
			button {
				padding: 0.4rem 0.4rem;
				border: none;
				background: var(--purple-1);
				color: var(--white-1);
				border-radius: 4px;
				font-size: 12px;
				letter-spacing: 1px;
				cursor: pointer;
			}
			button:active {
				transform: scale(0.9);
			}
		`}</style>
	</>
);

export default BtnPrimary;
