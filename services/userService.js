class UserService {
	heders = {
		'Content-Type': 'application/json;charset=utf-8',
	};
	async isert(username) {
		try {
			const options = {
				heders: this.heders,
				method: 'POST',
				body: JSON.stringify({ username }),
			};
			const res = await fetch('/api/user', options);
			const resultado = await res.json();
			return resultado;
		} catch (error) {
			return {
				error: true,
				message: 'error api',
			};
		}
	}
}

const userService = new UserService();
export default userService;
