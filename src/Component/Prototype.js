// Example of a prototype
// Creating a constructor function
function Demo(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the Person prototype
  Demo.prototype.introduce = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  };
  
  // Creating instances using the Person constructor
  const person1 = new Demo('Alice', 25);
  const person2 = new Demo('Bob', 30);
  
  // Using the introduce method inherited from the prototype
  console.log(person1.introduce()); // Output: Hi, I'm Alice and I'm 25 years old.
  console.log(person2.introduce()); // Output: Hi, I'm Bob and I'm 30 years old.