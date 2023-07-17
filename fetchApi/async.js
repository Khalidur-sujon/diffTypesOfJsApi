const display = document.getElementById("display");

async function getData() {
	// const res = await fetch("http://127.0.0.1:37433/data.txt");
	const res = await fetch(
		"https://www.learnui.design/tools/gradient-generator.html"
	);
	const data = await res.text();
	display.innerText = data;
}
