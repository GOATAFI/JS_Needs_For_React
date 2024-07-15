//sobgula array method er common boishisto holo j era ekta callback function nibe

//find
//1 ta element e back dibe
//main array k hath dibena
const fruits = ["Jackfruit","Apple", "Orange", "Mango", "Dates", "Lemon","Apple"];
const result = fruits.find((f) => f === "Orange");
console.log(result);

//findIndex
//same as find just element er index return korbe

const result2 = fruits.findIndex((f) => f === "Orange");
console.log(result2);

//filter
//multiple element back dibe
//main array k hath dibena
const result3 = fruits.filter((f) => f === "Orange" || f === "Mango");
console.log(result3);

//concat 
//main array te hath dey na
//shudu elements jemon add korte pari , array of elements ou add korte pari
const result6 = fruits.concat("Berry")
const result7 = fruits.concat(["Pear","Papaya"])
console.log(result6);
console.log(result7);
// console.log(fruits);

//map
//main array k hath dey na , notun ekta array return kore 
const result9 = fruits.map((f)=>{
    if(f === "Apple"){
        return "Apple"
    }
    else{
        return "N/A"
    }
})
console.log(result9);

const result10 = fruits.map((f)=> `${f} -`)
console.log(result10);

//push
//main array k change kore felbe
const result8 = fruits.push("Kiwi")
console.log(result8); // main array er total index number return korbe
console.log(fruits);

//slice
//starting ar ending index lagbe , start index included end index excluded
//main array te hath dibe na

const result4 = fruits.slice(0, 2);
console.log(result4);

//splice
//main array k change kore fele
//splice(index,noOfRemovedElements,additionalElements)
const result5 = fruits.splice(
  2,
  2,
  "Pineapple",
  "Guava",
  "Watermelon",
  "Cherry"
); //2 ta element remove kore j 2 tai e add kora lagbe emon kono rule nai , I can add unlimited elements just oi 2 ta kete ene oi jaygay boshay dibe , ar ei fol pabo main array te
console.log(result5); // 2 no. element theke 2 ta element k kete ene return kore dibe
console.log(fruits);

//for of loop
//array ar string k iterate korte pare , object k iterate korte parena
const numbers = [1,2,3,4,5,6]
for(num of numbers){
    console.log(num);
}

const name = "Nahid Parvez Mafi"
for(char of name){
    console.log(char);
}

//for in loop
//object er jonno 

const language ={
    name : "Javascript",
    year : 1995,
    difficulity : "Medium"
}

for(key in language){
    console.log(key);  //keys gula print korbe shudu
    console.log(language[key]); //key er corresponding value gula print hobe
}