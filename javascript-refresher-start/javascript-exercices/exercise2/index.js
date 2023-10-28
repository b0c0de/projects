const transformToObjects = (numbers) => {
  // Create an empty array to store the transformed objects.
  const transformedObjects = [];

  // Iterate over the input array of numbers.
  for (const number of numbers) {
    // Create a new object with a `val` key and the current number as a value.
    const transformedObject = {
      val: number,
    };

    // Add the transformed object to the new array.
    transformedObjects.push(transformedObject);
  }

  // Return the new array of transformed objects.
  return transformedObjects;
};

// Declare the `numbers` variable.
const numbers = [1, 2, 3];

// Transform the `numbers` array into a list of JavaScript objects.
const transformedObjects = transformToObjects(numbers);

// Log the transformed objects to the console.
console.log(transformedObjects);
