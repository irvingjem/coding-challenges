var animal_object = {
    Dog: 4,
    Cat: 7,
    Chicken: 2,
    Frog: 8
  };
  
  var less_animals = {};
  
  var more_animals = {};
  
  var keys = Object.keys(animal_object);
  
  keys.forEach((key, index) => {
    // console.log(key);
    // console.log(animal_object[key]);
  
    // console.log("object" + key + animal_object[key]);
  
    if (animal_object[key] < 5) {
      less_animals[key] = animal_object[key];
    } else {
      more_animals[key] = animal_object[key];
    }
  });
  
  console.log(less_animals);
  console.log(more_animals);
  // console.log(animals);
  
  // for (var animals in animal_object) {
  //   if (animal_object.hasOwnProperty(animals)) {
  //     console.log(animals + "number" + animal_object);
  //   }
  // }
  
  // Iterate through animal_object and check the count of the animal:
  // Sort each animal and their counts in two different newly created
  // object.
  // If the animal has a count of less than or equal to 5, put it in
  // your first newly created object.
  // If the animal has a count of greater than 5, put it in
  // your second newly created object
  // use console.log to print out each of your new objects
  
  // Expected output:
  // Object {Dog: 4, Chicken: 2}
  // Object {Cat: 7, Frog: 8}
  
  // your code goes here
  