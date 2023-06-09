/**
 * Calculawrite
 */

let premierNombre = Number(window.prompt("Entrez un premier nombre svp"));
while(isNaN(premierNombre)){
    premierNombre = Number(window.prompt("Nombre invalide, entrez un premier nombre valide"));
}

let secondNombre = Number(window.prompt("Entrez un second nombre svp"));
while(isNaN(secondNombre)){
    secondNombre = Number(window.prompt("Nombre invalide, entrez un second nombre valide"));
}

let operateur = window.prompt("Entrez un opérateur arithmétique svp...");
while(operateur !== "+" &&
      operateur !== "-" &&
      operateur !== "*" &&
      operateur !== "/"){

    operateur = window.prompt("Operateur invalide, entrez un opérateur entre +, -, * ou /");
}

    switch (operateur) {
        case ("+"):
            result = premierNombre + secondNombre;
            document.write("Le résultat de l'opération " + premierNombre + operateur + secondNombre + " donne " + result);
            break;
        case ("*"):
            result = premierNombre * secondNombre;
            document.write("Le résultat de l'opération " + premierNombre + operateur + secondNombre + " donne " + result);
            break;
        case ("-"):
            result = premierNombre - secondNombre;
            document.write("Le résultat de l'opération " + premierNombre + operateur + secondNombre + " donne " + result);
            break;
        case ("/"):
            result = premierNombre / secondNombre;
            document.write("Le résultat de l'opération " + premierNombre + operateur + secondNombre + " donne " + result);
            break;
        default:
            document.write("L'opérateur entré n'est pas pris en compte !");
            break;

    
    }


