/*function nextInLine(arr, item){
  arr.push(item); //it puts 6 in the string
  return arr.shift();//it returns the first element of the string
}

var testArr= [1,2,3,4,5];

console.log("Before:"+ JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:"+ JSON.stringify(testArr));
//JSON.stringify->it changes an array into a string
*/
/*function caseInSwitch(val){
  var answer="";
  switch(val){
case 1:
  answer="alpha";
  break;
  case 2:
    answer="beta";
    break;
    case 3:
    answer="gama";
    break;
    case 4:
    answer="delta";
    break;
    }
  return answer;
}

console.log(caseInSwitch(3)); */

/*
function switchOfStuff(val){
  var answer="";
  switch(val){
case "a":
  answer="apple";
  break;
  case "b":
    answer="bird";
    break;
    case "c":
    answer="cat";
    break;
    default:
      answer="stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("a"));*/

/*function abTest(a,b){

if(a<0 || b<0){
  return undefined;
}
return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2)); //Math.pow()-a number at a certain power
}
console.log(abTest(-2,2)); */

/*var testObj={
  "an entree": "hamburger",
  "my side":"veggies",
  "the drink":"water"

};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);
*/


/*function phoneticLookup(val){
  var result="";//initializam asta cu 0 teoretic

   var lookup= //cream obiectul
   {
      "alpha":"Adams",
      "beta":"Chicago",
      "gama":"Boston",
      "coi":"Denver",
      "cimpoi":"Easy",
      "foxtrot":"Frank"
   };
   result = lookup[val];

   return result;

}
console.log(phoneticLookup('foxtrot')); */


/*
var myObj={
  gift:"pony",
  pet:"kitten",
  bed:"sleigh"
};

function checkObj(checkProp){
  if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  else
  {
    return "404";
  }
 
}
console.log(checkObj("sex")); */

/*var myPlants=[
  {
    type:"flowers",
    list:[
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type:"trees",
    list:[
      "fir",
      "pine",
      "birch"

    ]
  }
]; //this is a representation of a long array that
//contains 2 objects that have also 2 arrays
var secondTree=myPlants[1].list[1];
console.log(secondTree);*/

//WHile loop
/*
var myArray=[];
var i=0;
while(i<5){
  myArray.push(i);//we put push to put these elem into the array
  i++;
  }
  console.log(myArray); */


 /* var myArray=[];

  for(var i= 0;i<6;i++){
    myArray.push(i);
  }
console.log(myArray);1*/

/*var myArray=[];
for(var i=0;i<=10;i+=2)
{
  myArray.push(i);
}
console.log(myArray);*/

//calculating the sum of an array
/*ourArr=[ 2, 5, 7, 8, 10];
ourTotal=0;
for(var i=0;i<ourArr.length;i++)
{
  ourTotal=ourTotal+ourArr[i];
}
console.log(ourTotal);*/

/*function convertToInteger(str){
  return parseInt(str,2);
}
console.log(convertToInteger("10001"));*/

/*function checkSign(num){
  return num>0? "positive" :num<0?"negative":"zero ";
}
console.log(checkSign(0));*/

/*const realNumberArray=[4, 5.6, -9.8,3.14,42,6,8.34,-2];
 const squareList=(arr)=>{
  const squaredIntegers=arr.filter(num=>Number.isInteger(num)&& num>0).map(x=>x*x);
 return squaredIntegers;
}; 
const squaredIntegers=squareList(realNumberArray);
console.log(squaredIntegers);*/

/*const sum=(function(){
  return function sum(...args){
    return args.reduce((a,b)=>a+b,0);
};
})();
console.log(sum(1,2,3,4));*/

/*function makeClass(){
  class Vegetable{
    constructor(name){
      this.name=name;
    }
    
  }
  return Vegetable;
}
const Vegetable=makeClass();
const carrot=new Vegetable('carrot');
console.log(carrot.name); */

function makeClass(){
  class Thermostat{
    constructor(temp){
      this._temp=5/9*(temp-32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
this._temp=updatedTemp;
    }
  }
  return Thermostat;
}
const Thermostat=makeClass();
const thermos= new Thermostat(76);
let temp=thermos.temperature;
thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);





  
