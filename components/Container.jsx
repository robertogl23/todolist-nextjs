const Container = ({ children, width = '100%', height = '100%' }) => (
	<>
		<div>{children}</div>
		<style jsx>{`
			div {
				min-width: ${width};
				min-height: ${height};
			}
		`}</style>
	</>
);

export default Container;
