function number(x) {
	if(document.getElementById("result").value == 0) {
		document.getElementById("result").value = x;
	}else {
		document.getElementById("result").value += x;	
	}
}

function reset() {
	document.getElementById("result").value = 0;
}

function operation(x) {
	if(document.getElementById("result").value == 0) {
		document.getElementById("result").value = x;
	}else {
		document.getElementById("result").value += x;
	}
}

function calculation() {
	document.getElementById("result").value = eval(document.getElementById("result").value);	
}

function delChar() {
	document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}

function square() {
	document.getElementById("result").value = Math.pow(document.getElementById("result").value, 2);
}

function percent() {
	document.getElementById("result").value = parseFloat(document.getElementById("result").value) * 100 + "%";
}

function factorial() {
	let cons = 1;
	for(let i = 1; i <= document.getElementById("result").value; i++) {
		cons = cons * i;
	}
	document.getElementById("result").value = cons;
}

function squareRoot() {
	document.getElementById("result").value = Math.sqrt(document.getElementById("result").value);
}