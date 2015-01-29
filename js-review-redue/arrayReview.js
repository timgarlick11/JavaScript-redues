var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

 var last = function(arr) {
 	alert(arr[arr.length - 1])
 }
 last(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  for (var i = 0; i < evenArray.length; i++) {
  	if (evenArray[i] % 2 === 0) {
  		evenArray.splice(i,1);
  		i--;
  	}
  };
  console.log(evenArray);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
	var getRandomArbitrary = function() {
	  return Math.floor(Math.random() * (30 - 0) + 0);
	}
	var num = getRandomArbitrary();
	var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

	  var randomFn = function(arr, randomNum) {
	  	console.log(randomNum);
	  	console.log(randomArray);
		for (var i = 0; i < arr.length; i++) {
	  		if (arr[i] === randomNum) {
	  			alert(true);
	  		} 
	  	} 
	 
	} 

	randomFn(randomArray, num);
	


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = first.slice();
second.push(6,7);


second.
alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  var longest = function(str) {
  		var sentence1 = str.split(" ");
  		console.log(sentence1);
  		var empty = ""
  		
  		for (var i = 0; i < sentence1.length; i++) {
  			if(sentence1[i].length > empty.length) {
  				empty = sentence1[i];
  		}
  	} return empty;
  	
 }
  	longest(sentence)


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  var capitalize = function(thePoem) {

  	return thePoem.toUpperCase();

  }
  capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowels = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true
}



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
var vowelCounter = function(sentence, vowelObj, counter) {
	var sentenceArr = sentence.split('')// splitting up the string that was passed in and putting it into an array
	console.log(sentenceArr)
	for (var i = 0; i < sentenceArr.length; i++) {
	      if(vowels[sentenceArr[i]] === true) { //
			counter++;
			console.log(counter)
	}
  }
}
vowelCounter(theOdyssey,vowels, 0);











var theOdyssey = "function expression or function declaration? Tis an obvious choice";
var vowels = ['a','e','i','o','u'];
var vowelCounter = function(sentence, arrVowels, num) {
	var sentenceArr = sentence.split('')
	console.log(sentenceArr)
	for (var i = 0; i < sentenceArr.length; i++) {
		for (var j = 0; j < vowels.length; j++) {
			if (vowels[j] === sentenceArr[i]){
			num++;
			console.log(num++);
           }
		}
	}
}
vowelCounter(theOdyssey,vowels, 0);


var vowel = 'a' && 'e' && 'i' && 'o' && 'u' === 1;

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
var vowelCounter = function(sentence, vowel, num) {
	var string = "0,1";
var array = string.split(",");
alert(array[0]);


}
vowelCounter(theOdyssey);



