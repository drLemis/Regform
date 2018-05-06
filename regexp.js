var textInput = document.getElementById("textInput");
var textOutput = document.getElementById("textOutput");

function transformText() {
	var fieldsFrom = document.getElementsByClassName("fieldFrom");
	var fieldsTo = document.getElementsByClassName("fieldTo");

	textOutput.value = textInput.value;

	for (var i = 0; i < fieldsFrom.length; i++) {
		// var regex = new RegExp(fieldsFrom[i].value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), "g");
		var regex = new RegExp(fieldsFrom[i].value, "g");
		textOutput.value = textOutput.value.replace(regex, fieldsTo[i].value);
	}
}
