let dollars = 0;        // la monnaie du joueur
document.getElementById("dollars")
/**
 * fonction permettant d'incrementer de 1$ toute les 10 seconde
 */
function augmentation(){
    dollars ++;
    Element.toString(dollars)

}

/**
 * fonction qui fait qu'a chaque fois que l'utilisateur appuie sur le bouton mineur il gagne 1$
 */
function onMine(){
    dollars++;
    document.location.reload();
    Element.toString(dollars)
}
