let w;

function startWorker() {
	if (typeof Worker !== "undefined") {
		// worker available

		// if worker already not exist
		if (typeof w == "undefined") {
			w = new Worker("worker.js");
		}

		//listening for worker events/msg
		w.onmessage = function (event) {
			document.getElementById("demo").innerHTML = event.data;
		};
	} else {
		alert("Your Browser does not suppor Worker");
	}
}

function stopWorker() {
	if (typeof Worker !== "undefined") {
		w.terminate();
		w = undefined;
	} else {
		alert("Your Browser does not suppor Worker");
	}
}
