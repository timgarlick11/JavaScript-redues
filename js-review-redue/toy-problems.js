/* Make sure you do these last */



Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

var plusOneSum = function(arr) {

for (var i = 0; i < arr.length; i++) {
	var nums = arr[i] + 1;
	
};
console.log(nums);
}



plusOneSum([1, 2, 3, 4]); // 14

*/ 
/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

var multi = [1, 2, [3, [4], 5, 6], 7]

var flatten = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr.length)
	};
}


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]


*/


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/







Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

var sentence = 'this is a great wording word';
var longest = function(first) {
	var empty = '';
	var second = first.split(' ');
	console.log(second);
	for (var i = 0; i < second.length; i++) {
		if (second[i].length >= empty.length) {
			empty = second[i]
		}
	}; return empty;

}
longest(sentence)

longest(sentence, arr)
longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]



	for (var i = 0; i < second.length; i++) {
		if (second[i].length >= empty.length) {
			empty = second[i]
		}
	};
/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
var arr2 = []
var arr = [];
var addAll = function(first, second) {
for (var i = 0; i < 1000; i++) {
	if (i % 3 === 0) {
		arr.push(i)
	}
}
for (var j = 0; j < 1000; j++) {
	if (j % 5 === 0) {
		arr2.push(j)
	}
}
var one = eval(first.join('+'));
//console.log(one);
var two = eval(second.join('+'));
var total = one + two;
return total;

}
addAll(arr, arr2)

var add = [1,2,3]
total = add.join('+'); // example
add;
Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
var onlyEven = [1,6,2,4,4,5,6,8,9,6]

var finder = function(arr, nums) {
var twice = [];
var once = []
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < nums.length; j++) {
	 	
	 }
 }

finder(onlyeven, test);


var test = [1,1,3,4,1]



	twice.push(j,i);

	 	} 

	 	}

	 }; 
	 	return twice;




var onlyEven = [1,6,2,4,4,5,6,8,9,6]

var finder = function(arr, nums) {
var twice = [];
var count = 0;
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
	for (var j = 0; j < nums.length; j++) {
		console.log(nums[j])
		if (nums[j] / arr[j] === 1) {
			count++;
		}
	};
 }
}
finder(onlyEven, test);
var test = [1,1,3,4,1]
