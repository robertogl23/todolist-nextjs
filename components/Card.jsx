import Container from "./Container";

const Card = ({ children, width = '100%', height = '100%' }) => (
	<>
		<Container width={width} height={height}>
			<div className='card f center full-size'>{children}</div>
		</Container>
		<style jsx>{`
			.card {
				background: var(--white-1);
				box-shadow : var(--Shadow-1);
				border-radius: 4px;
				padding: .4rem;
			}
		`}</style>
	</>
);

export default Card;
