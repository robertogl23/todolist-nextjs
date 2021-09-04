import HomeLayout from '../layouts/HomeLayout';
import Card from './Card';
import UserForm from './UserForm';

const Home = () => {
	return (
		<HomeLayout>
			<Card width="8rem" height="10rem">
				<UserForm/>
			</Card>
		</HomeLayout>
	);
};

export default Home;
