$(document).ready(function(){
	$('#new-item').click(() => {
		$('.list-container').addClass('hide');
		$('.new-container').removeClass('hide');
		$('#add-todo-text').focus();
	});
	$('#list-item').click(() => {
		$('.new-container').addClass('hide');
		$('.list-container').removeClass('hide');
	});

	FbAPI.getTodos().then(() => {
		FbAPI.writeDom();
	}).catch((error) => {
		console.log("getTodos error ", error);
	});

	//add todo
	$("#add-todo-button").click(() => {
		console.log("click working");
		let newTodo = {
			isCompleted: false,
			task: $('#add-todo-text').val()
		};
		FbAPI.addTodo(newTodo).then(() => {
			console.log("main.js", newTodo);
			$('.new-container').addClass('hide');
			$('.list-container').removeClass('hide');
			$('#add-todo-text').val("");
			FbAPI.writeDom();
		}).catch(() => {

		});
	});
	
	//delete todo
	//edit todo
	//complete todo




































});
