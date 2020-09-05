// ordered list, volgorde maakt uit
// array --> [1, 2, 5, 3]

// unordered list, volgorde maakt niet uit
// set --> new Set() set.add('pizza')

// key-value pairs of unordered data
// object --> { name: 'Max', age:'31' }

// key-value pairs of ordered data
// map --> new Map() map.set('loc', 'Germany')


// ARRAYS

// 99% van de tijd worden arrays gebruikt t.o.v. sets

const names = ['Mario', 'Luigi', 'Yoshi', 'Mario'];

// index begint op 0
console.log(names[1]);

// academind doet 'const el of names' 
for (const el of names) {
    console.log(el);
};

// netninja deed de 'let i = 0l i < names.length; i++'
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

// toevogen van waarde
names.push('Bowser');
console.log(names.length);

// vinden van een waarde
// variabele el stop je in de functie, return is el als gelijk aan Yoshi
const yoshiIndex = names.findIndex(el => el === 'Yoshi');
console.log(yoshiIndex);

// weghalen van waardes in array --> splice(van index, hoeveel)
names.splice(2, 1);
console.log(names);


// SETS

// alleen unieke waarden
// makkelijker om toe te voegen en te verwijderen --> hoeft niet door elke waarde en hoeft ze ook niet te verplaatsen omdat de volgorde niet uitmaakt 
// niet in volgorde

const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);

for (const j of ids) {
    console.log(j);
}

// ids[1] werkt niet, want er is geen volgorde

// .has geeft boolean of het in de set zit 
console.log(ids.has('abc'));

// verwijderen en toevoegen
ids.delete('bb2');
ids.add('def');


// OBJECTS

// methods zoals greet() kan je ook toevoegen

const person = {
    firstName: 'Mario',
    age: '42',
    hobbies: ['Gaming', 'Asswhooping'],
    greet() {
        console.log(`It's a me, ${this.firstName}`);
    }
};

// 'person[0]' werkt niet en 'for (const el of names) {}' ook niet omdat het niet iterable is

console.log(person['firstName']);
console.log(person.firstName);

// toevoegen en verwijderen

person.lastName = 'Nintendo';

delete person.age;

console.log(person);

person.greet();


// MAPS

// maps zijn beste voor pure data storage, 
// verwijderen en toevoegen is net zoals sets handiger, bij hele grote hoeveelheden data :)

const resultData = new Map();

resultData.set('average', 1.53);
resultData.set('lastResult', null);

// in een map kan een object een key zijn, dat kan niet bij andere

const germany = { name: 'germany', population: 82 };

resultData.set(germany, 0.89);

for (const el of resultData) {
    console.log(el);
}

// je moet een .get gebruiken om de specifieke waarde te krijgen
console.log(resultData.get('average'));
console.log(resultData.average);

// verwijderen

resultData.delete(germany);
console.log(resultData);



// LINKED LIST DATA STRUCTURE

// elements weten alleen van het volgende element, ze zijn 'linked elements' 
// alternatief voor een array, voor als je veel elementen wilt toevoegen aan het begin van de lijst

// class maken voor een blueprint, zodat het te hergebruiken is
class linkedList {

    // constructor zorgt voor het maken van nieuwe linkedList --> const linkedList1 = new linkedList();
    constructor() {

        // Academind noemt elementen in de linkedList nodes
        // eerste is head node, laatste is tail node
        // hier niet weer data behandelen als array --> this.node = []; --> maakt geen sense

        this.head = null;
        this.tail = null;

    }

    // nu iets toevoegen aan (het einde van) de lijst

    append(value) {
        // newNode != value, omdat de node een pointer moet hebben naar de volgende --> object dus
        const newNode = {
            value: value,
            next: null
        };

        // het is geen array, dus iets als this.list.push()
        // WAUW dit kan je toch niet zelf verzinnen?!

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    // nu iets toevoegen aan (het begin van) de lijst
    // niet gelukt zelf te verzinnen!!!

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        };

        this.head = newNode;
        // this.head.next = this.head

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // verwijderen van elementen

    delete(value) {

        // als het leeg is, stop met code
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            }
            else {
                curNode = curNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }

    // vinden

    find(value) {

        // als het leeg is, is er ook niets om te vinden
        if (!this.head) {
            return null;
        }

        // begin bij het begin
        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }

        // niks gevonden? cool
        return null;
    }

    insertAfter(value, afterValue) {

        // vind eerst de afterValue 
        const existingNode = this.find(afterValue);

        // als deze er is, maak een nieuwe node aan
        // nieuwe node heeft dezelfde .next als huidige node
        // huidige node krijgt de nieuwe node als zijn .next
        if (existingNode) {
            const newNode = {
                value: value,
                next: existingNode.next
            };
            existingNode.next = newNode;
        }

    }

    // zorgen dat er het wordt opgeschreven

    toArray() {
        const elements = [];

        let curNode = this.head;
        // het mag niet leeg/null zijn
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }
}

const linkedList1 = new linkedList();
linkedList1.append('Hello there');
linkedList1.append('Nermin');
linkedList1.append(9000);
linkedList1.append(true);
linkedList1.prepend('FIRST!');
linkedList1.prepend('FIRST!');

console.log(linkedList1.toArray());

linkedList1.delete('FIRST!');
linkedList1.delete(true);

console.log(linkedList1.toArray());

console.log(linkedList1.find('FIRST!'));
console.log(linkedList1.find(9000));

linkedList1.insertAfter('Bermin', 'Nermin');

console.log(linkedList1.toArray());