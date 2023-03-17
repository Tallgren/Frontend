//parameterlös
function hello() {
    console.log("Hello");
}

//call direkt i js
hello();

//parameterfunktion
function printMessage(message) {

    console.log(message)
}

printMessage("hej")

const el = document.getElementById('Header')
printMessage(el)

//return funktioner
function returnName(firstName, lastName) {
    return firstName + " " + lastName;
}


/*document.onkeydown = function (e) {
    document.getElementById('Header').innerHTML += String.fromCharCode(e.which);

}
*/

function getTime() {
    return document.getElementById("time").innerHTML = new Date().toLocaleDateString();
    }