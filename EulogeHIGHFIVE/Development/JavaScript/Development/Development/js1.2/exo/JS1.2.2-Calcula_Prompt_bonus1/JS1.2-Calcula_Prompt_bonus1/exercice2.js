/**
 * Bonus 1 de Calculaprompt : gestion des erreurs
 */

const premierNombre = Number(window.prompt("Entrez un premier nombre svp"));
const operateur = window.prompt("Entrez un opérateur arithmétique svp...");
const secondNombre = Number(window.prompt("Entrez un second nombre svp"));

// if (isNaN(premierNombre) || isNaN(secondNombre)) {
//     window.alert("L'un des nombres n'est pas valide !")

// } else if (operateur === "*" ||
//     operateur === "+" ||
//     operateur === "-" ||
//     operateur === "/") {

//     if (operateur === "+") {
//         result = premierNombre + secondNombre;
//         console.log(premierNombre, operateur, secondNombre, "=", result);
//     }

//     if (operateur === "-") {
//         result = premierNombre - secondNombre;
//         console.log(premierNombre, operateur, secondNombre, "=", result);
//     }

//     if (operateur === "*") {
//         result = premierNombre * secondNombre;
//         console.log(premierNombre, operateur, secondNombre, "=", result);
//     }

//     if (operateur === "/") {
//         result = premierNombre / secondNombre;
//         console.log(premierNombre, operateur, secondNombre, "=", result);
//     }
// } else {
//     window.alert("L'opérateur n'est pas valide ! Entrez-en un valide");
// }

if (isNaN(premierNombre) || isNaN(secondNombre)) {
    window.alert("L'un des nombres n'est pas valide !")

} else {
        switch(operateur){
            case("+"):
                result = premierNombre + secondNombre;
                break;
            case("*"):
                result = premierNombre * secondNombre;
                break;
            case("-"):
                result = premierNombre - secondNombre;
                break;
            case("/"):
                result = premierNombre / secondNombre;
                break;
            default :
                console.log("L'opérateur entré n'est pas pris en compte !");
                break;
       
        }
        console.log("Le résultat de l'opération " + premierNombre + operateur + secondNombre + " donne " + result);
}




// while (isNaN(premierNombre) || isNaN(secondNombre)) {
//     const premierNombre = Number(window.prompt("Entrez un premier nombre svp"));
//     const operateur = window.prompt("Entrez un opérateur arithmétique svp...");
//     const secondNombre = Number(window.prompt("Entrez un second nombre svp")); 
//     if (operateur === "*" ||
//     operateur === "+" ||
//     operateur === "-" ||
//     operateur === "/") {
    
//         if (operateur === "+") {
//             result = premierNombre + secondNombre;
//             console.log(premierNombre, operateur, secondNombre, "=", result);
//         }
    
//         if (operateur === "-") {
//             result = premierNombre - secondNombre;
//             console.log(premierNombre, operateur, secondNombre, "=", result);
//         }
    
//         if (operateur === "*") {
//             result = premierNombre * secondNombre;
//             console.log(premierNombre, operateur, secondNombre, "=", result);
//         }
    
//         if (operateur === "/") {
//             result = premierNombre / secondNombre;
//             console.log(premierNombre, operateur, secondNombre, "=", result);
//         }
//     }
//     break
// } 