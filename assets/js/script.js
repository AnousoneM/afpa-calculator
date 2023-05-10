let nb1 = document.querySelector("#nb1")
let nb2 = document.querySelector("#nb2")
let operator = document.querySelector("#operator")
let result = document.querySelector("#result")

// On définit l'affichage par défaut = nb1
let display = nb1
let virgule = 0


// on selectionne tous les éléments de classe .nb
const myNb = document.querySelectorAll('.nb')

// je parcours le tableau myNb pour y ajouter un eventlistener au click à l'aide d'un forEach
myNb.forEach(element => {
    // au click j'affiche le contenu du bouton (element.inner) dans display (display.innerText)
    element.addEventListener('click', function () {

        display.innerText += element.innerText


    })
})

const myOperator = document.querySelectorAll(".operator")

myOperator.forEach(element => {
    element.addEventListener("click", function () {
        display = nb2
        operator.innerText = element.innerText
    })
})

let btnac = document.getElementById("btnac")

btnac.addEventListener("click", function () {
    nb1.innerText = ""
    operator.innerText = ""
    nb2.innerText = ""
    display = nb1
    result.innerText = ""
})


btnequal.addEventListener("click", function () {
    let operatorValue = operator.innerText
    let resultat = 0
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
    result.innerText = resultat

})

