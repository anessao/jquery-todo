$(document).ready(function(){
	let apiKeys;
	let editId = "";

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
		let newTodo = {
			isCompleted: false,
			task: $('#add-todo-text').val()
		};

		if(editId.length > 0){
			console.log("if passing?");
      //edit
      FbAPI.editTodo(apiKeys, newTodo, editId).then(() => {
        $('#add-todo-text').val("");
        editId = "";
        $('.new-container').addClass('hide');
        $('.list-container').removeClass('hide');
        FbAPI.writeDom(apiKeys);
      }).catch((error) => {
        console.log("addTodo error", error);
      });
    } else{
      FbAPI.addTodo(apiKeys, newTodo).then(() => {
        $('#add-todo-text').val("");
        $('.new-container').addClass('hide');
        $('.list-container').removeClass('hide');
        FbAPI.writeDom(apiKeys);
			}).catch((error) => {
				console.log(error);
			});
		}
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
		editId = e.target.id;
		let originalText = $(e.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html();
			$('.list-container').addClass('hide');
			$('.new-container').removeClass('hide');
			$('#add-todo-text').focus();
			$('#add-todo-text').val(originalText);
	});

	//complete todo
	$(".main-container").on("click", "input[type='checkbox']", (e) => {
		let myTodo = {
			isCompleted: event.target.checked,
			task: $(event.target).siblings('.task').html()
		};
		let targetId = e.target.id;
		FbAPI.editTodo(apiKeys, myTodo, targetId).then(() => {
			FbAPI.writeDom(apiKeys);
		}).catch((error) => {
			console.log("checker error ", error);
		});
	});

	




































});
