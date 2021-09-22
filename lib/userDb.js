import Db from './db';
import Validaciones from './validaciones';

class UserDb extends Db {
	constructor() {
		super();
	}
	async GetAllUsers() {
		try {
			const { db } = await this.getDb();
			const users = await db.collection('users').find({}).toArray();
			const datos = JSON.stringify(users);
			return datos;
		} catch (error) {
			console.log('error consultar datos', error);
			return [];
		}
	}
	async FindByUsername(name) {
		try {
			const { db } = await this.getDb();
			const users = await db
				.collection('users')
				.find({ username: name })
				.toArray();
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
				typeError: "input",
				error: true,
				message,
				value,
				statusCode: 500,
			};
		}
		try {
			const { db } = await this.getDb();
			const user = await db
				.collection('users')
				.find({ username: value })
				.toArray();
			console.log(user);
			const { insertedCount } = await db.collection('users').insertOne({
				usernamer: value,
			});
			insertedCount = 2;
			if (insertedCount === 1) {
				return {
					error ,
					message: 'usuario guardado correctamente c:',
					value,
					statusCode: 201,
				};
			}
			return {
				typeError: "server",
				error: true,
				message: 'error, usuario no guardado :c',
				value: null,
				statusCode: 500,
			};
		} catch (error) {
			return {
				typeError: "server",
				error: true,
				message: 'error, usuario no guardado :c',
				value: null,
				statusCode: 500,
			};
		}
	}
}

const userDb = new UserDb();
export default userDb;
