var res = document.getElementById("resultat");

function modifR(event) {
	var sliderR = document.getElementById("rouge");
	console.log(sliderR.value);
	displayColor();
}
function modifV(event) {
	var sliderV = document.getElementById("vert");
	console.log(sliderV.value);
	displayColor();
}
function modifB(event) {
	var sliderB = document.getElementById("bleu");
	console.log(sliderB.value);
	displayColor();
}
function displayColor() {
	var sliderV = document.getElementById("vert");
	var sliderB = document.getElementById("bleu");
	var sliderR = document.getElementById("rouge");
	res.style.backgroundColor = "rgb(" +sliderR.value+ "," +sliderV.value + "," + sliderB.value + ")";
}
