const users = [
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      email: 'john@example.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 30,
      email: 'jane@example.com'
    },
    {
      id: 3,
      name: 'Jack Johnson',
      age: 28,
      email: 'jack@example.com'
    }
  ];

const people = [{
     id: 12, name: 'Mohan Johnson', age: 20, email: 'mohan@example.com'
}]

/////////////////////////////////// push() ////////////////////////////////
// add object
  users.push({
    id: 4 ,
    name: 'sweta Johnson',
    age: 23,
    email: 'sweta@example.com'
  })
  console.log("push() method : ",users)

/////////////////////////////////// pop() ////////////////////////////////
// remove last element
  users.pop()
  console.log("pop() method : ",users)

/////////////////////////////////// shift() ////////////////////////////////
// remove frist element
users.shift()
console.log("shift() method : ",users)

/////////////////////////////////// unshift() ////////////////////////////////
// add frist element
users.unshift( { id: 4, name: 'sweta Johnson', age: 23, email: 'sweta@example.com' })
console.log("unshift() method : ",users)

/////////////////////////////////// concat() ////////////////////////////////
// add two array
const newArr = users.concat(people)
console.log("concat() method : ",newArr)


/////////////////////////////////// forEach() ////////////////////////////////
// get all array
users.forEach (item =>{
    console.log("forEach() method : ", item )
})

const number = [ 1, 4, 7,8]
number.forEach (item =>{
    console.log("forEach() method : ", item *2 )
})


/////////////////////////////////// split() ////////////////////////////////
// convert string to array
const str = "apple, ham, tum"
str.split(",")
console.log("split() method : ",str)


/////////////////////////////////// join() ////////////////////////////////
// convert array to string
// Extracting names from each object
const names = users.map(user => user.name);

// Joining names into a single string
const joinedNames = names.join(", ");

console.log("Joined names: ", joinedNames);


/////////////////////////////////// slice() ////////////////////////////////
// slice me two index dete hai (yha se start hoga , yha tk end hoga) enke bich ke sare element aange

const sliceUsers = users.slice(1,2);

console.log("Original users array:", users);
console.log("slice users array:", sliceUsers);


/////////////////////////////////// splice() ////////////////////////////////
// slice me two index dete hai (yha se start hoga , yha tk end hoga) enke bich ke sare element aange
// Removing Jane Smith (index 1) from the array
users.splice(1, 1);

console.log(users);

const newUser = {
    id: 4,
    name: 'Emily Watson',
    age: 35,
    email: 'emily@example.com'
  };
  
  // Replace Jack Johnson with newUser
  users.splice(2, 1, newUser);
  
  console.log(users);


//   map array return krta hai jbki forEach nhi

/////////////////////////////////// map() ////////////////////////////////
// get all array in new array
const newArray = users.map (item => item)
    console.log("map() method : ", newArray )


/////////////////////////////////// filter() ////////////////////////////////

const filterArray = users.filter(user => user.name === "sweta Johnson");
console.log("filter() method : ", filterArray);
