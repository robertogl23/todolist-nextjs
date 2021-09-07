class Validaciones {
	static ValidarUsername({ username, require = true}) {
		if (require && !username.trim()) {
			return {
				error: true,
				message: 'Campo obligatorio',
				value: null,
			};
		}
		if (username.length < 5 ) {
			return {
				error: true,
				message: 'username debe ser mayor o igual a 5 caracteres',
				value: null,
			};
		}
		if (username.length > 8) {
			return {
				error: true,
				message: 'username debe ser menor o igual a 8 caracteres',
				value: null,
			};
		}
		return {
			error: false,
			message: 'Ok',
			value: username,
		};
	}
}
export default Validaciones;
