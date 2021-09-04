// import clientPromise from "../lib/mongodb"
import Head from 'next/head';
import Home from '../components/Home';

import { useEffect } from 'react';
import UserDb from '../lib/userDb';

export default function Index({ datos }) {
	useEffect(() => console.log(datos), []);
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Home />
		</>
	);
}

export async function getStaticProps(context) {
	const user = new UserDb();
	// await user.InsertUsers('pedro');
	const datos = [];
	return {
		props: { datos: datos },
	};
}
