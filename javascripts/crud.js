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
				});
				FbAPI.setToDos(items);
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	oldAPI.addTodo = (newTodo) => {
		console.log("oldapi adtodo");
		return new Promise ((resolve, reject) => {
			newTodo.id = `item${FbAPI.todoGetter().length}`;
			FbAPI.getSingleTodo(newTodo);
			resolve();
		});
	};

	oldAPI.checker = (id) => {
		return new Promise((resolve, reject) => {
			FbAPI.setChecked(id);
			resolve();
		});
	};

	oldAPI.deleteTodo = (deleteId) => {
		return new Promise ((resolve, reject) => {
			FbAPI.arrayDelete(deleteId);
			resolve();
		});
	};
	
	oldAPI.editTodo = (editId) => {
		return new Promise ((resolve, reject) => {
			FbAPI.arrayDelete(editId);
			resolve();
		});
	};




	return oldAPI;
})(FbAPI || {});