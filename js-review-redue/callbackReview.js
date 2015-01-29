/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
var first = function(namesArr, callback) {
    return callback(namesArr[0]);
}

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var last = function(nameArr, cb) {
  return cb(nameArr[nameArr.length -1])
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var contains = function(person, namesArr, cb) {
var learn = false
for (var i = 0; i < namesArr.length; i++) {
  if(namesArr[i] === person) {
    learn = true;
     }
  } return cb(learn);
}

contains('Colt', names, function(yes){  // the yes is the parameter. when you call the function in the contains you need to remember that what you are passing in is the argument which is passed to the parameter.
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});






/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function

var map = function(numberArr, callBack) {
  var newArr = [];
  console.log(numberArr) //logging the information for debugging purposes
  for (var i = 0; i < numberArr.length; i++) {
   newArr.push(callBack(numberArr[i])) // basically in the callBack you are passing the number value at index i into the parameter num; then you are pushing the information the callBack function is executing into the newArr.
   console.log(newArr)
  }; 
}
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
  var uniq = function(namesArr, callBack) {
    var newArr = [];
    for (var i = 0; i < namesArr.length; i++) {
     if (newArr.indexOf(namesArr[i]) === -1) { //  you need to check the index of the empty array. if that value does not exist push it to the array. -1 means that the value is not in the array
      newArr.push(namesArr[i])
      console.log(newArr)
     }
   }
   callBack(newArr);
 }
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var each = function(namesArr, cb) {
    for (var i = 0; i < namesArr.length; i++) {
        cb(namesArr[i], i) // the item is the name which is represented at namesArr[i] which means the namesArr at the specific index of i and i represent the index number.
  }
}


each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function(value, obj, callBack) {
    for (var i = 0; i < obj.length; i++) {
       if (obj[i].id === value) { you get the object at index i and the id by either putting a box around it obj[i]['id'] or just the way it is called
           callBack(obj[i]); // the obj at index i is being passed to user in the function and then it is finding all of the values using dot notation replacing user with the obj that is being passed in.
    }
  }
}


getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
var find = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
      if (cb(arr[i]) === true) { // you pass the arr[i] to num into the parameter of num it will run its function if it returns true you return the value at arr[i] which will be the first one which is 2
        return arr[i]; // the return statement stops a loop.
        
    }
  }; 
}


find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})









