var tellMeImCool = function(){
    console.log(`tellMeImCool Array: Hello, you are totally cool!!`);
}

tellMeImCool();

var arrayOfNames = [`Jisie`, `Teresa`, `Matt`, `David`];
var arrayOfNames2 = [`Larry`, `Curly`, `Moe`]

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