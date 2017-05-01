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
		countTask();
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
			$('.new-container').addClass('hide');
			$('.list-container').removeClass('hide');
			$('#add-todo-text').val("");
			FbAPI.writeDom();
			countTask();
		}).catch(() => {

		});
	});
	
	//delete todo
	$(".main-container").on("click", ".delete", (e) => {
		let targetId2 = e.target.id;
		FbAPI.deleteTodo(targetId2).then(() => {
			FbAPI.writeDom();
			countTask();
		}).catch((deleteError) => {
			console.log("deleteTodo error: ", deleteError);
		});
	});

	//edit todo
	//complete todo
	$(".main-container").on("click", "input[type='checkbox']", (e) => {
		let targetId = e.target.id;
		FbAPI.checker(targetId).then(() => {
			FbAPI.writeDom();
			countTask();
		}).catch((error) => {
			console.log("checker error ", error);
		});
	});

	let countTask = () => {
		let reaminingTasks = $("#incomplete-tasks li").length;
		$("#counter").hide().fadeIn(3000).html(reaminingTasks);
	};




































});
