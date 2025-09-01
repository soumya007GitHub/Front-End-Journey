The Object.seal() and Object.freeze() methods in JavaScript are used to control the mutability of objects, but they offer different levels of restriction.
Object.seal() Example:
Object.seal() prevents the addition of new properties and the deletion of existing properties. However, it allows the modification of values for existing properties.
JavaScript

const sealedObject = {
  name: "Alice",
  age: 30
};

Object.seal(sealedObject);

console.log(Object.isSealed(sealedObject)); // true

// Attempt to add a new property (will be ignored in non-strict mode, throws TypeError in strict mode)
sealedObject.city = "New York";
console.log(sealedObject.city); // undefined (or throws error)

// Attempt to delete an existing property (will be ignored in non-strict mode, throws TypeError in strict mode)
delete sealedObject.age;
console.log(sealedObject.age); // 30 (or throws error)

// Modify an existing property (allowed)
sealedObject.age = 31;
console.log(sealedObject.age); // 31
Object.freeze() Example:
Object.freeze() provides a higher level of immutability. It prevents the addition of new properties, the deletion of existing properties, and the modification of values for existing properties.
JavaScript

const frozenObject = {
  name: "Bob",
  score: 100
};

Object.freeze(frozenObject);

console.log(Object.isFrozen(frozenObject)); // true

// Attempt to add a new property (will be ignored in non-strict mode, throws TypeError in strict mode)
frozenObject.level = 5;
console.log(frozenObject.level); // undefined (or throws error)

// Attempt to delete an existing property (will be ignored in non-strict mode, throws TypeError in strict mode)
delete frozenObject.score;
console.log(frozenObject.score); // 100 (or throws error)

// Attempt to modify an existing property (will be ignored in non-strict mode, throws TypeError in strict mode)
frozenObject.score = 110;
console.log(frozenObject.score); // 100 (or throws error)