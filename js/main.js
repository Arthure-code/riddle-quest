const refSectionEnigmes = document.getElementById('sectionEnigmes');
const refEnigmeCourante = document.getElementById('enigmeCourante');
let intIndexEnigmeCourant = 0;
const arrEnigmesPigees = new Array();
const arrReponsesEnigmesPigees = new Array();


document.getElementById('boutonRepondre').addEventListener('click', validerReponseEnigme);
document.querySelector('form').addEventListener('submit', empecherEnvoiForm);

initialiserEnigmes();


function initialiserEnigmes() {
	const NB_ENIGMES_PIGEES = 5;

    // À compléter
}

function validerReponseEnigme () {
    const refCommentaireEnigme = document.getElementById('commentaireEnigme');
    const refChampReponseEnigme = document.getElementById('champReponseEnigme');
    const refReponseEntree = refChampReponseEnigme;
    const strReponseAttendue = arrReponsesEnigmesPigees[intIndexEnigmeCourant];

    // À compléter
}

function empecherEnvoiForm(objEvenement) {
    objEvenement.preventDefault();
}

/**
* Obtenir un nombre entier aléatoire entre deux valeurs
* @param {number} min - Nombre aléatoire minimum
* @param {number} max - Nombre aléatoire maximum
* @returns {number} Nombre entier aléatoire entre intMin et intMax
*/
function obtenirNombreEntierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
