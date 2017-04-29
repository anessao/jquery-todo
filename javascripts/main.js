$(document).ready(function(){
	$('#new-item').click(() => {
		$('.list-container').addClass('hide');
		$('.new-container').removeClass('hide');
	});
	$('#list-item').click(() => {
		$('.new-container').addClass('hide');
		$('.list-container').removeClass('hide');
	});

	FbAPI.getTodos().then((results) => {
		console.log("results", results);
	}).catch((error) => {
		console.log("getTodos error ", error);
	});







































});
