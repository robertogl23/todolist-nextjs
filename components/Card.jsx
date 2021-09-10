const Card = ({ children, width = '100%', height = '100%' }) => (
	<>
		<div className='card f center'>{children}</div>
		<style jsx>{`
			.card {
				background: var(--white-1);
				box-shadow: var(--Shadow-1);
				border-radius: 4px;
				padding: 0.4rem;
				min-width: ${width};
				min-height: ${height};
			}
		`}</style>
	</>
);

export default Card;
