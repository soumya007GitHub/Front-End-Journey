The code let obj = {...obj1} uses the spread syntax to achieve a shallow copy of obj1.
This means:
A new object obj is created.
All top-level properties and their values from obj1 are copied into obj.
If obj1 contains nested objects or arrays, only their references are copied, not the nested objects or arrays themselves. Therefore, if a nested object or array is modified in obj, the change will also be reflected in obj1 because both objects still point to the same underlying nested data.


const originalObject = {
      name: "John",
      address: {
        city: "New York",
        zip: "10001"
      }
    };
    const deepCopy = JSON.parse(JSON.stringify(originalObject));
    We will use the above code for deep copy