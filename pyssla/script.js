var grille = document.getElementById("grille");
var style = document.getElementById("style");
var sectionNouvelleCouleur = document.getElementById("nouvelleCouleur");
var couleurSelectionnee = document.getElementById('couleurSelect');
do {
	var colonnes = parseInt(prompt('Combien de colonnes veux-tu ? Entre un nombre entre 5 et 29.'));
} while (colonnes < 5 || colonnes > 29);

creerGrille(colonnes);

/////////////////////////////////////////
//////////// fonctions //////////////////
/////////////////////////////////////////

function selectionCouleur(element) {
	couleurSelectionnee.className = element.className;
}

function creerGrille(colonnes) {
	for (var i = 1; i <= colonnes; i++) { //lignes
		grille.appendChild(document.createElement("div")); //centrage de la grille
		for (var j = 1; j <= colonnes; j++) { // colonnes
			var button = document.createElement('button');
			button.setAttribute('class', "blanc");
			button.onclick = function() { //chgt de couleur lors du click
				this.className = couleurSelectionnee.className;
			}
			grille.appendChild(button);
		}
		grille.appendChild(document.createElement("div")); //centrage de la grille
	}
	// gère le grid
	if (colonnes < 20) {
		grille.style.gridTemplateColumns = "1fr repeat(" + colonnes + ", " + "50px) 1fr";
		grille.style.gridTemplateRows = "repeat(" + colonnes + ", " + "50px)";
	} else {
		grille.style.gridTemplateColumns = "1fr repeat(" + colonnes + ", " + "30px) 1fr";
		grille.style.gridTemplateRows = "repeat(" + colonnes + ", " + "30px)";
	}
}

function zoom(zoomId) {
	var chaine = grille.style.gridTemplateColumns;
	var regex = /[0-9]*px/gm;
	var largeurCase = parseInt(chaine.match(regex));
	if (zoomId == "zoomPlus") {
		largeurCase += 5;
	} else {
		largeurCase -= 5;
	}
	grille.style.gridTemplateColumns = "1fr repeat(" + colonnes + ", " + largeurCase + "px) 1fr";
	grille.style.gridTemplateRows = "repeat(" + colonnes + ", " + largeurCase + "px)";
}

function ajouter() {
	var nCouleurButton = document.createElement("button");
	nCouleur = prompt("Quelle couleur veux-tu créer ?");
	nCouleurButton.className = nCouleur;
	nCouleurButton.setAttribute("onclick", "selectionCouleur(this)");
	nCouleurButton.textContent = nCouleur;
	sectionNouvelleCouleur.style.display = "flex";
	document.getElementById("couleurs").insertBefore(nCouleurButton, document.getElementById("ajout"));
}

var res = document.getElementById("resultat");

function modifR() {
	var sliderR = document.getElementById("rouge");
	displayColor();
}
function modifV() {
	var sliderV = document.getElementById("vert");
	displayColor();
}
function modifB() {
	var sliderB = document.getElementById("bleu");
	displayColor();
}
function displayColor() {
	var sliderV = document.getElementById("vert");
	var sliderB = document.getElementById("bleu");
	var sliderR = document.getElementById("rouge");
	res.style.backgroundColor = "rgb(" +sliderR.value+ "," +sliderV.value + "," + sliderB.value + ")";
}

function validerCouleur() {
	var nouvelleCouleur = document.getElementById("resultat").style.backgroundColor;
	var tabCouleurs = document.querySelectorAll("#couleurs button:not(#ajout)");
	var nouvelleClasse = tabCouleurs[tabCouleurs.length-1].className;
	var nouveauStyleCss = document.createTextNode("." + nouvelleClasse + "{ background-color: " + nouvelleCouleur + ";}");
	style.appendChild(nouveauStyleCss);
	sectionNouvelleCouleur.style.display = "none";
}

function reset() {
	document.querySelectorAll("#grille button").forEach(function(element) {
		element.className = "blanc";
	})
}
