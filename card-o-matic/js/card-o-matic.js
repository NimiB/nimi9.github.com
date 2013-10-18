$('.color-choices').click(function(){

	var chosen_color = $(this).css('background-color');
	console.log(chosen_color);
	$('#canvas').css('background-color',chosen_color);
	$(".texture-choices").css('background-color',chosen_color);

});


//click listener for textures
$('.texture-choices').click(function(){

	var chosen_texture = $(this).css('background-image');
	console.log(chosen_texture);
	$('#canvas').css('background-image',chosen_texture);

});

//click listerner for messages
$('input[name=message]').click(function(){

var label_element = $(this).next();
var selected_message=label_element.html();
console.log(selected_message);
$('#message-output').html(selected_message);

});

//listener for recipient input
$('#recipient').keyup(function(event) {

	var recipient_input = $(this).val();
	var lenght=recipient_input.length;

	var characters_left = 14 - lenght;
	$('#recipient-error').html("you have " + characters_left + " characters left");


	if(lenght>=10 && lenght<14){
		//show a warning
		//$('#recipient-error').html("you are almost out of characters");
		$('#recipient-error').css('color','orange');
	}
	else if(lenght==14) {
		//$('#recipient-error').html("you are out of characters");
		$('#recipient-error').css('color','red');
	}

	else{
		$('#recipient-error').css('color','black');
	}
	
	$('#recipient-output').html(recipient_input);
	
});

//click listeners for sticker
$(".stickers").click(function(){
	//var which_image=$(this).attr('src');
	//var new_image="<img src='" + which_image + "'>";
	//$("#canvas").prepend(new_image);

	var new_sticker=$(this).clone();
	new_sticker.addClass('stickers_on_card');
	$("#canvas").prepend(new_sticker);
	$('.stickers_on_card').draggable({ containment: "#canvas" });

});




