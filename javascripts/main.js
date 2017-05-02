$(document).ready(function(){
	let apiKeys;

	$('#new-item').click(() => {
		$('.list-container').addClass('hide');
		$('.new-container').removeClass('hide');
		$('#add-todo-text').focus();
	});
	$('#list-item').click(() => {
		$('.new-container').addClass('hide');
		$('.list-container').removeClass('hide');
	});


	//FIREBASE INITIALIZE FUNCTION
	FbAPI.firebaseCredentials().then((keys) => {
		apiKeys = keys;
		firebase.initializeApp(apiKeys);
		FbAPI.writeDom(apiKeys);
	}).catch((error) => {
		console.log("key errors", error);
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
			FbAPI.writeDom(apiKeys);
		}).catch(() => {

		});
	});
	
	//delete todo
	$(".main-container").on("click", ".delete", (e) => {
		let targetId2 = e.target.id;
		FbAPI.deleteTodo(apiKeys, targetId2).then(() => {
			FbAPI.writeDom(apiKeys);
		}).catch((deleteError) => {
			console.log("deleteTodo error: ", deleteError);
		});
	});

	//edit todo
	$(".main-container").on("click", ".edit", (e) => {
		let targetId3 = e.target.id;
		let originalText = $(e.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html();
		FbAPI.editTodo(targetId3).then(() => {
			$('.list-container').addClass('hide');
			$('.new-container').removeClass('hide');
			$('#add-todo-text').focus();
			$('#add-todo-text').val(originalText);

		}).catch((editError) => {
			console.log("editTodo error: ", editError);
		});
	});

	//complete todo
	$(".main-container").on("click", "input[type='checkbox']", (e) => {
		let targetId = e.target.id;
		FbAPI.checker(targetId).then(() => {
			FbAPI.writeDom(apiKeys);
		}).catch((error) => {
			console.log("checker error ", error);
		});
	});

	




































});
