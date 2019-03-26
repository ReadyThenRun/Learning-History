/* console */
// Outputting a single object
var someObject = { str: "Some text", id: 5 };
console.log(someObject);
// Object { str: "Some text", id: 5 }

// Outputting multiple objects
var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 }; 
console.info("My first car was a", car, ". The object is:", someObject);

// Using string substitutions
// %o,%O;%s;%d,%i;%f(floating-point value.);
for (var i=0; i<5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}

/**
Hello, Bob. You've called me 1 times. 
Hello, Bob. You've called me 2 times. 
Hello, Bob. You've called me 3 times. 
Hello, Bob. You've called me 4 times. 
Hello, Bob. You've called me 5 times. 
*/
// You can use the %c directive to apply a CSS style to console output:
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");

// Using groups in the console
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");

// Timers
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");

// Stack traces

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}
foo();
console.trace();


