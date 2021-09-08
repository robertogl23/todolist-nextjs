import Head from 'next/head';
import Home from '../components/Home';

import { useEffect } from 'react';

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
	const datos = [];
	return {
		props: { datos: datos },
	};
}
