var FbAPI = (() => {
	let todos = [];

	return {
		todoGetter : () => {
			return todos;
		},
		setToDos :  (newArray) => {
			todos = newArray;
		},
		getSingleTodo: (newTodo) => {
			todos.push(newTodo);
		},
		setChecked: (itemId) => {
			let position = itemId.split("item")[1];
			todos[position].isCompleted = !todos[position].isCompleted;
		},
		arrayDelete: (id) => {
			let position2 = id.split("item")[1];
			todos.splice(position2, 1);
		}
	};
})();