//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

 var favoriteThings = {
  band: 'coldplay',
  food: 'breakfast',
  person:'wife',
  book: 'The Green Mile',
  holiday: 'birthday'

 }

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'acura';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  favoriteThings.food = 'pizza';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings['person']);// you need to pass it in on a string. it look looks for that key value.



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  for (falsey in user) {
    if(!user[falsey]) {
      delete user[falsey];
    }
  }
  console.log(user)

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

 user.name = 'Tim Garlick';
 user.pwHash = 'asfde';
 user.username = 'timgarlick11'


//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

 var methodCollection = {

 };

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  methodCollection.alertHello = function() {
    alert('hello')
  };
  methodCollection.logHello = function() {
    console.log('hello')
  }
//Now call your alertHello and logHello methods. 

 methodCollection.alertHello();
 methodCollection.logHello();
 console.log(methodCollection);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};
var sentence = "this is my sentence I will be looping through. it is really cool";


var vowler = function(sentence1) {
var O = 0;
var U = 0;
var E = 0;
var I = 0;
var A = 0;
var vowelObj = {};

var sentence2 = sentence1.toLowerCase();
sentenceArr = sentence2.split("");
console.log(sentenceArr);
      for (var i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i] === 'o') {
          O++;}
            if (sentenceArr[i] === 'u') {
                U++;}
                    if (sentenceArr[i] === 'e') {
                      E++;}
                          if (sentenceArr[i] === 'i') {
                            I++;}
                                if (sentenceArr[i] === 'a') {
                                  A++;};

    } 
vowelObj.A = A;
vowelObj.E = E;
vowelObj.I = I;
vowelObj.O = O;
vowelObj.U = U;
 console.log("U: ", U);
 console.log("O: ", O);
 console.log("E: ", E);
 console.log("I: ", I);
 console.log("A: ", A)
 console.log(vowelObj)
}
vowler(sentence);












