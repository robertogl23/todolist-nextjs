import Db from './db';

export default class UserDb extends Db {
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
			const users = await db.collection('datos').insertOne({
				nombre,
			});
			console.log(users);
			const datos = JSON.stringify('users');
			return [];
		} catch (error) {
			console.log('error consultar datos', error);
			return [];
		}
	}
}
