$(document).ready(function(){

    // Tab switching
    $("#create-tab").click(function(){
	$(".list-group").hide();
	$(".form-group").show();
	$("#save-button").show();
    });
    $("#load-tab").click(function(){
	$(".list-group").show();
	$(".form-group").hide();
	$("#save-button").hide();
    });

});
