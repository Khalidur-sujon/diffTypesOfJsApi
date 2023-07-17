const display = document.getElementById("display");

function getData() {
	fetch("http://127.0.0.1:37433/data.txt")
		.then((res) => res.text())
		.then((data) => (display.innerText = data));
}
