var FbAPI = ((oldAPI) => {
	
	oldAPI.getTodos = () => {
		let items = [];
		return new Promise ((resolve, reject) => {
			$.ajax('./db/seed.json')
			.done((data) => {
				let response = data.items;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					items.push(response[key]);
				})

				resolve(items);
			})
			.fail((error) => {
				reject(error);
			});
		});
	};
	




	return oldAPI;
})(FbAPI || {});