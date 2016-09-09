console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
function makeMiddleEarth() {
    var middleEarth = document.createElement("SECTION");

    for (var i = 0; i < lands.length; i++) {
        var place = document.createElement("article");
        var h1 = document.createElement("h1");
        var textNode = document.createTextNode(lands[i]);
        h1.appendChild(textNode);
        place.appendChild(h1);
        middleEarth.appendChild(place);}

    document.body.appendChild(middleEarth);}

// makeMiddleEarth();



// Part 2
// display an unordered list of hobbits in the shire (which is the second article tag on the page)
// give each hobbit a class of hobbit
function makeHobbits() {

  var h1Shire = document.getElementsByTagName("h1")[0];

  for (var i = 0; i < hobbits.length; i++) {
      var tmpHobbit = document.createElement("class");
      var textNode = document.createTextNode(hobbits[i]);
      h1Shire.appendChild(tmpHobbit);
      tmpHobbit.appendChild(textNode);
      h1Shire.appendChild(tmpHobbit);};}



// Part 3
// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
// add the ring as a child of Frodo
function keepItSecretKeepItSafe() {
    var ringdiv = document.createElement('div');
    var magicJ = document.createElement('class');
    var ringText = document.createTextNode('the-ring');
    var shire = document.getElementsByTagName('h1')[0];
    var frodo = shire.getElementsByTagName('class')[0];

    magicJ.setAttribute('class', 'magic-imbued-jewerlry');
    magicJ.appendChild(ringText);
    ringdiv.appendChild(magicJ);
    frodo.appendChild(ringdiv);
    ringdiv.addEventListener('click', nazgulScreech);}



 // Part 4
// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell

function makeBuddies() {

    var rivendale = document.getElementsByTagName('h1')[1];
    var newside = document.createElement('aside');

    for (i = 0; i < buddies.length; i++) {
        var tmpLi = document.createElement('Li');
        var tmpBud = document.createTextNode(buddies[i]);
        tmpLi.appendChild(tmpBud);
        newside.appendChild(tmpLi);}

    rivendale.appendChild(newside);}





// Part 5
// change the 'Strider' textnode to 'Aragorn'

function beautifulStranger() {
    var strider = document.getElementsByTagName('Li')[3];
    strider.innerHTML ='Aragorn';}




// Part 6
// assemble the hobbits and move them to Rivendell
function leaveTheShire() {
    var shire = document.getElementsByTagName('h1')[0];
    var rivendale = document.getElementsByTagName('h1')[1];
    var cls = shire.getElementsByTagName('class');

    for (i = 0; i < cls.length; i++) {
        rivendale.appendChild(cls[i]);}}

//IF THIS IS BEING READ:  this moved over 2 elements at a time so it had to be executed more than once.






// Part 7
// create a new div called 'the-fellowship' within rivendell
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party
function forgeTheFellowShip() {

}





// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
