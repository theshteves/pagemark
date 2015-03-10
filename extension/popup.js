document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("create-tab").addEventListener("click", function() {
	document.getElementById("load-tab").removeAttribute("class");
	document.getElementById("create-tab").setAttribute("class", "active");
	document.getElementById("markList").style.display = "none";
	document.getElementById("enterMark").style.display = "block";
	document.getElementById("save-button").style.display = "block";
    });

    document.getElementById("load-tab").addEventListener("click", function() {
	document.getElementById("create-tab").removeAttribute("class");
	document.getElementById("load-tab").setAttribute("class", "active");
	document.getElementById("save-button").style.display = "none";
	document.getElementById("markList").style.display = "block";
	document.getElementById("enterMark").style.display = "none";
    });
});

document.onload = function() {

};

/*
$(document).ready(function() {

    // Tab switching
    $("#create-tab").click(function() {
	$(".list-group").hide();
	$(".form-group").show();
	$("#save-button").show();
    });
    $("#load-tab").click(function() {
	$(".list-group").show();
	$(".form-group").hide();
	$("#save-button").hide();
    });
    $("#lt").click(function() {
	$(".list-group").show();
	$(".form-group").hide();
	$("#save-button").hide();
    });
    //$('#count').value($('.list-group-item').length);

});
*/
