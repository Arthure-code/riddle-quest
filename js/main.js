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

    if (normaliser(refReponseEntree.value) !== normaliser(strReponseAttendue)) {
        refCommentaireEnigme.textContent = 'Mauvaise réponse';
        refCommentaireEnigme.classList.add('erreur');
        return;
    }

    // Bonne réponse : le commentaire s'efface et l'étoile de cette énigme
    // apparaît. Les étoiles sont numérotées à partir de 1.
    refCommentaireEnigme.textContent = '';
    refCommentaireEnigme.classList.remove('erreur');
    document.getElementById('etoileEnigme' + (intIndexEnigmeCourant + 1)).classList.remove('cacher');

    intIndexEnigmeCourant++;
    refReponseEntree.value = '';

    if (intIndexEnigmeCourant < arrEnigmesPigees.length) {
        refEnigmeCourante.textContent = arrEnigmesPigees[intIndexEnigmeCourant];
    } else {
        document.getElementById('zoneEnigme').classList.add('cacher');
        document.getElementById('finJeu').classList.remove('cacher');
    }
}

function empecherEnvoiForm(objEvenement) {
    objEvenement.preventDefault();
}

/**
* Ramener une réponse à une forme comparable : espaces de bord retirés,
* minuscules, accents enlevés et œ écrit oe. Un enfant qui tape « eponge »
* ou « nœud » a trouvé la réponse.
* @param {string} strTexte - Texte saisi ou attendu
* @returns {string} Le texte normalisé
*/
function normaliser(strTexte) {
    return strTexte
        .trim()
        .toLowerCase()
        .replace(/œ/g, 'oe')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
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
