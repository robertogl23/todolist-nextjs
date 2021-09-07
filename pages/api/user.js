import userDb from '../../lib/userDb';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		// Process a POST request
		try {
			const { username } = req.body;
			const resultados = await userDb.InsertUsers(username || '');
			res.status(resultados.statusCode).json(resultados);
		} catch (e) {
			res.status(500).json({
				error: true,
				message: 'error internal',
			});
		}
	} else {
		res.status(200).json({ name: 'John Doe' });
	}
}
