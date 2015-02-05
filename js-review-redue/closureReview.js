var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var inner = callFriend(); // this invokes the callFriend function and stores the 
inner('435-215-9248') //this is invoking the callF function on the inside and passing the phone number to the number parameter



/*

Write a function that accepts a function as it's only argument and 
returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. 
After the function has been called N number of times, console.log('STAHHP');

*/
var mainFn = function(secondFn) {
	var placeHolder = true;	
	if(stop === true) {
		return function() {
			secondFn();
			placeHolder = false;
				
		} 
	} else { return 'stop'};
};

thirdFn = mainFn(function() {

	alert("stooop")
})