// Invokes a function immediately, passing arguments one by one.
function greet(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

const person = {
  name: "Alice"
};

greet.call(person, "Delhi", "India");

// Invokes a function immediately, passing arguments as an array.

greet.apply(person, ["Delhi", "India"]);

// Does not invoke the function immediately. It returns a new function with this permanently bound.

const boundGreet = greet.bind(person, "Delhi", "India");

boundGreet(); // Function called later