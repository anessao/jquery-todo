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
			const position = itemId.split("item")[1];
			todos[position].isCompleted = !todos[position].isCompleted;
		}
	};
})();