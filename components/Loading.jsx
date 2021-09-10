import SyncLoader from 'react-spinners/SyncLoader';
const Loading = ({ message }) => (
	<>
		<p>
			{message} <SyncLoader color={'#5a1bd6'} loading={true} size={4} />
		</p>
		<style jsx>{`
			p{
                font-size: 14px;
            }
		`}</style>
	</>
);

export default Loading;
