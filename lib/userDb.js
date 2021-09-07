import Db from './db';
import Validaciones from './validaciones';

class UserDb extends Db {
	constructor() {
		super();
	}
	async GetAllUsers() {
		try {
			const { db } = await this.getDb();
			const users = await db.collection('datos').find({}).toArray();
			const datos = JSON.stringify(users);
			return datos;
		} catch (error) {
			console.log('error consultar datos', error);
			return [];
		}
	}
	async InsertUsers(nombre) {
		try {
			const { db } = await this.getDb();
			const { error, message, value } = Validaciones.ValidarUsername({
				username: nombre,
			});
			if (!error) {
				const resultado = await db.collection('datos').insertOne({
					nombre,
				});
				if (resultado.insertedCount === 1) {
					return {
						error,
						message,
						value,
					};
				}
				return {
					error: true,
					message: 'error, usuario no guardado :C',
					value: null,
				};
				// console.log(resultado);
				// const datos = JSON.stringify('users');
			}
			return {
				error,
				message,
				value,
			};
		} catch (error) {
			console.log('error consultar datos', error);
			return [];
		}
	}
}

const userDb = new UserDb();
export default userDb;
