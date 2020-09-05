// browser side JS, kan HTML en CSS manipuleren, maar geen file system
// server side JS (Node.js), kan geen HTML en CSS manipuleren, maar wel file system

// '\n' is de '<br>' versie van JS! Als je het wilt zien in HTML, moet je wel in CSS 'white-space: pre' toevoegen
// \\ of \' zegt in JS, gebruik het teken achter de backslash anders dan normaal, \' laat in de string zo simpelweg een aanhalingsteken zien en \\ een \

// .addEventListener(type event, function) is een method om een functie te roepen op een bepaald event, zoals 'click'
// deze functie hoef je niet in te voel/te executen, alleen maar naar refereren

// holy shit... Chrome Performance en Debugging is powerful!


const defaultResult = 0;
let currentResult = defaultResult;

const userInput1 = document.getElementById('input-number1');
// const userInput2 = document.getElementById('input-number2');

const addBtn = document.getElementById('btn-add');

const currentCalculationOutput = document.getElementById('current-calculation');

let logEntries = [];

function outputResult(result) {
    currentCalculationOutput.textContent = result;
}

/* beter om flexibel te blijven en geen dubbele code te moeten schrijven
beter om losse functie te maken die in de andere functie wordt opgeroepen
voorbeeld van Academind niet precies gevolgd, hier geen concreet voorbeeld */

function add() {
    // parseInt maakt van en string een number
    // alternatief is alleen een plusje, +userInput2.value
    // currentResult = parseInt(userInput1.value) + +userInput2.value; // voor 2 velden
    initialResult = currentResult;
    currentResult += +userInput1.value;
    outputResult(currentResult);

    // hier object maken om meer data op te slaan, i.p.v. alleen logEntries.push(currentResult);
    const logEntry = {
        prevResult: initialResult,
        number: +userInput1.value,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.result)
    console.log(logEntries);

    userInput1.value = null;
}

console.log(currentResult);

addBtn.addEventListener('click', add);

// van stackOverflow geplukt
userInput1.oninput = function () {
    if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);
    }
}

