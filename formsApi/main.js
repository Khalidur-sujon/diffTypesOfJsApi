function validation() {
	const inputObj = document.getElementById("id1");

	if (document.getElementById("id1").validity.rangeUnderflow) {
		inputObj.setCustomValidity("Value is too low");
	} else if (document.getElementById("id1").validity.rangeOverflow) {
		inputObj.setCustomValidity("Value is too high");
	} else if (document.getElementById("id1").validity.valueMissing) {
		inputObj.setCustomValidity("Value missing");
	} else {
		inputObj.setCustomValidity("Every thing is okay");
	}

	if (!inputObj.checkValidity()) {
		document.getElementById("demo").innerHTML = inputObj.validationMessage;
	}
}
