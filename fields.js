var elementArguments = document.getElementById('arguments')
var newID = 0;

function addField() {
	newID++;

	var divtest = document.createElement("div");
	divtest.style = "margin: 5px";
	divtest.setAttribute('id', 'element[' + newID + ']');

	divtest.innerHTML = '<span>From: <input type="text" class="fieldFrom" style="width:20%;" id="fieldFrom[' + newID + ']" value=""/></span> ' +
		'<span>To: <input type="text" class="fieldTo" style="width:20%;" id="fieldTo[' + newID + ']" value=""/></span> ' +
		'<span><button class="button" onclick="removeField(' + newID + ')">Remove</button></span>';

	elementArguments.appendChild(divtest);
}

function removeField(id) {
	elementArguments.removeChild(document.getElementById('element[' + id + ']'));
}
