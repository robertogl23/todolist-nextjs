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
		const { error, message, value } = Validaciones.ValidarUsername({
			username: nombre,
		});
		if (error) {
			return {
				error,
				message,
				value,
			};
		}
		try {
			const { db } = await this.getDb();
			const { insertedCount } = await db.collection('datos').insertOne({
				value,
			});
			if (insertedCount === 1) {
				return {
					error,
					message: 'usuario guardado correctamente c:',
					value,
				};
			}
			return {
				error: true,
				message: 'error, usuario no guardado :c',
				value: null,
			};
		} catch (error) {
			return {
				error: true,
				message: 'error, usuario no guardado :c',
				value: null,
			};
		}
	}
}

const userDb = new UserDb();
export default userDb;
