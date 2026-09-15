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

    // Cinq tirages sans remise : l'énigme pigée et sa réponse quittent la
    // banque, pour qu'aucune ne revienne deux fois dans la même partie.
    for (let i = 0; i < NB_ENIGMES_PIGEES; i++) {
        const intIndexHasard = obtenirNombreEntierAleatoire(0, arrEnigmes.length - 1);

        arrEnigmesPigees.push(arrEnigmes[intIndexHasard]);
        arrReponsesEnigmesPigees.push(arrReponsesEnigmes[intIndexHasard]);

        arrEnigmes.splice(intIndexHasard, 1);
        arrReponsesEnigmes.splice(intIndexHasard, 1);
    }

    refEnigmeCourante.textContent = arrEnigmesPigees[intIndexEnigmeCourant];
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
