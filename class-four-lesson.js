var tellMeImCool = function(){
    console.log(`Hello, you are totally cool!!`);
}

tellMeImCool();

var arrayOfNames = [`Jisie`, `Teresa`, `Matt`, `David`];
var arrayOfNames2 = [`Larry`, `Curly`, `Moe`];

var sayHello = function(taco){
    for(var i = 0; i< taco.length; i++){
        console.log(`Hello ${taco[i]}`);
    }
}
// You want to avoid having to create redundant code. 
// var sayHello2 = function(){
//     for(var i = 0; i< arrayOfNames2.length; i++){
//         console.log(`Hello ${arrayOfNames2[i]}`);
//     }
// }

sayHello(arrayOfNames);
sayHello(arrayOfNames2);

var meatFactory = function(meat){
    console.log(`meat: ${meat}`);
    var nugget = meat + ` nugget`;
    console.log(`nugget: ${nugget}`)
    return nugget;
    //ANythin after a return function will not be executed
}

var chickenNugget = meatFactory(`Chicken`);
console.log(chickenNugget);



var validNonMuggles = [`Harry`, `Hermione`, `Ron`, `Jisie`];
var validJedi = [`Luke`, `Yoda`, `Matt Windu`, `Matt`];

var checkNonValidUsers = function(user, arrayOfValidUsers){
    if(arrayOfValidUsers.includes(user)){
        return `Valid`;
    } else {
        return `Non-valid!`;
    }
}

console.log(checkNonValidUsers(`Bob`, validNonMuggles));
var  jedi = checkNonValidUsers(`Matt Windu`, validJedi);
console.log(jedi);