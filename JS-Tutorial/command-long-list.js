var x, y, z;
x = 5;
y = 6;
z = x + y;

document.getElementById("demo").innerHTML = "Hello Dolly.";

/**JavaScript Code Blocks*/
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello Dolly.";
    document.getElementsByClassName("links").innerHTML = "Welocme to ..";
}

/**One Statement, Many Variables*/
var person = " Shuai",
    carName = "Volvo",
    prince = 200;

// If you re-declare a JavaScript variable, it will not lose its value.
var person;
alert(person)

var x = 16 + 4 + "Volvo";
// x = "20Volvo";

var x = "Volvo" + 16 + 4;
// x = "Volvo164";

/**JavaScript Objects */
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

person = null; // Now value is null, but type is still an object
person = undefined; // Now both value and type is undefined

typeof undefined // undefined
typeof null // object

null === undefined // false
null == undefined // true

// Primitive Data: string, number, boolean, undefined
// Complex Data: function, object

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    // Object Methods
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.