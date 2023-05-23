// Déclaration des élements du DOM que nous stockons dans des variables respectives
let nb1 = document.querySelector("#nb1")
let nb2 = document.querySelector("#nb2")
let operator = document.querySelector("#operator")
let result = document.querySelector("#result")

// On définit l'affichage par défaut = nb1
let display = nb1

// On définit le nombre de virgule à 0
let virgule = 0

// on selectionne tous les éléments de classe .nb que nous stockons dans la variable myNb
const myNb = document.querySelectorAll('.nb')

// je parcours le tableau myNb pour y ajouter un eventlistener au click à l'aide d'un forEach
myNb.forEach(element => {
    // au click j'affiche le contenu du bouton (element.inner) dans l'élément 'display' (display.innerText)
    element.addEventListener('click', function () {

        // gestion de la virgule : Pour ne pas que ce soit possible d'en mettre 2 à la suite
        if (element.innerText == '.') {
            if (virgule != 1) {
                display.innerText += element.innerText
                virgule = 1
            }
            // gestion du zero, pour ne pas pouvoir de mettre plusieurs zéro au debut
        } else if (element.innerText == '0') {
            if (display.innerText != '0') {
                display.innerText += element.innerText
            }
        } else {
            if(display.innerText == '0'){
                display.innerText = element.innerText
            } else {
                display.innerText += element.innerText
            }
        }

    })
})

// On sélectionne tous les classes operator
const myOperator = document.querySelectorAll(".operator")

// On parcours le noeud / tableau à l'aide d'un forEach et nous ajoutons un écouteur 'click' à chaque élement
myOperator.forEach(element => {
    element.addEventListener("click", function () {
        // Au clic sur un operator :
        // nous basculons le display sur nb2
        display = nb2
        // nous remettons le compteur de virgule à 0
        virgule = 0
        // puis nous inscrivongs l'opérateur dans sa case respective
        operator.innerText = element.innerText
    })
})

// On déclare notre variable btnac qui sera notre bouton AC
let btnac = document.getElementById("btnac")

// on ajoute un écouteur d'évenement au click sur le bouton AC
btnac.addEventListener("click", function () {
    // On réinitialise toutes les valeurs
    nb1.innerText = '0'
    operator.innerText = ''
    nb2.innerText = ''
    result.innerText = ''

    display = nb1
    virgule = 0
})

// on déclare notre variable btnequal qui sera notre bouton Equal

let btnequal = document.getElementById("btnequal")

// on ajoute un écouteur d'événement au click
btnequal.addEventListener("click", function () {
    // Nous récupérons la valeur de l'opérateur
    let operatorValue = operator.innerText

    // Nous mettons en place une variable qui changera de valeur en fonction de l'opération effectuée
    let resultat = 0

    // nous mettons en place les 4 cas correspondants aux opérations possible
    // utilisation de Number() pour transformer le string en nombre
    switch (operatorValue) {
        case '+':
            resultat = (Number(nb1.innerText) + Number(nb2.innerText))
            break
        case '-':
            resultat = (Number(nb1.innerText) - Number(nb2.innerText))
            break
        case '/':
            resultat = (Number(nb1.innerText) / Number(nb2.innerText))
            break
        case 'x':
            resultat = (Number(nb1.innerText) * Number(nb2.innerText))
            break
    }
    // Nous affichons le résultat
    result.innerText = resultat

})

