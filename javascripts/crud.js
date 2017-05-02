var FbAPI = ((oldAPI) => {
	
	oldAPI.getTodos = (apiKeys) => {
		let items = [];
		return new Promise ((resolve, reject) => {
			$.ajax(`${apiKeys.databaseURL}/items.json`)
			.done((data) => {
				let response = data;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	oldAPI.addTodo = (apiKeys, newTodo) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'POST',
				url: `${apiKeys.databaseURL}/items.json`,
				data: JSON.stringify(newTodo)
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject("add error: ", error);
			});
		});
	};

	oldAPI.deleteTodo = (apiKeys, deleteId) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'DELETE',
				url: `${apiKeys.databaseURL}/items/${deleteId}.json`
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject("delete error: ", error);
			});
		});
	};
	
	oldAPI.editTodo = (apiKeys, editTodo, editId) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: 'PUT',
				url: `${apiKeys.databaseURL}/items/${editId}.json`,
				data: JSON.stringify(editTodo)
			}).done(() => {
				resolve();
			}).fail((error) => {
				reject("add error: ", error);
			});
		});
	};




	return oldAPI;
})(FbAPI || {});