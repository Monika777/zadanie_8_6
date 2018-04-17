var a = 0,
	b = 0,
	value = 0;

function calculations() {
	a = document.getElementById("valueA").value;
	b = document.getElementById("valueB").value;
	value = (a * a) - (2 * a * b) + (b * b);
	document.getElementById("result").innerHTML=value;
	console.log(value);
	console.log(value > 0 ? 'Positive' : 'Negative');
	document.getElementById("plusMinus").innerHTML=value >= 0 ? 'Positive' : 'Negative';
	document.getElementById("ifZero").innerHTML=value == 0 ? 'and it is equal = 0' : 'and it is NOT equal = 0';
}