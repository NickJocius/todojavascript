$(function() {


	// Check Off Specific Todos By Clicking
	// Have to start at ul because in jquery we must grab element that exists when page loads, then look for the li being clicked
	$("ul").on("click", "li", function(){
		$(this).toggleClass("crossOut");
	});

	// On mouseEnter cursor changes to pointer
	$("li").on("mouseenter", function(){
		$(this).css("cursor","pointer");
	});

	//Click on trashcan to delete Todo
	$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(600, function(){
			$(this).remove();
		});
		event.stopPropagation();
	});

	//keypress event looking for enter key pressed to add new todo item
	$("input[type='text'").on("keypress", function(event){
		if(event.which === 13){
			//grabbing new todo text from input
			let newToDo = $(this).val();
			//create a new li and add to ul
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>");
			$(this).val("");
		}
		$(this).attr("placeholder", function(n,v) {
			return v = "Add Another Item";
		});
	});

	// listener when plus sign is clicked
	$(".fa-plus").on("click",function(){
		$("input[type='text'").fadeToggle(200);
	})
		
		
});