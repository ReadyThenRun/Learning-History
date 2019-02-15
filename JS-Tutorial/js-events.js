// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
// <element event='some JavaScript'>
// <element event="some JavaScript">
/** HTML
<button onclick = "document.getElementBiId('demo').innerHTML=Date()" > The Time is ? < /button>
<p id="demo"></p>

<button onclick="this.innerHTML = Date()">The time is?</button>
*/
// JS-string
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

var x = "We are the so-called \"Vikings\" from the north.";

document.getElementById("demo").innerHTML = "Hello \
Dolly!";


var x = "John"; // typeof x will return string
var y = new String("John"); // typeof y will return object
// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types (string and object)

var x = new String("John");
var y = new String("John");
// (x == y) is false because x and y are different objects
// (x === y) is false because x and y are different objects