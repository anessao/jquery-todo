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
		}
	};
})();