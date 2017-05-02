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
		console.log("oldapi adtodo");
		return new Promise ((resolve, reject) => {
			newTodo.id = `item${FbAPI.todoGetter().length}`;
			FbAPI.getSingleTodo(newTodo);
			resolve();
		});
	};

	oldAPI.checker = (apiKeys, id) => {
		return new Promise((resolve, reject) => {
			FbAPI.setChecked(id);
			resolve();
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
	
	oldAPI.editTodo = (apiKeys, editId) => {
		return new Promise ((resolve, reject) => {
			FbAPI.arrayDelete(editId);
			resolve();
		});
	};




	return oldAPI;
})(FbAPI || {});