//sobgula array method er common boishisto holo j era ekta callback function nibe

//find
//1 ta element e back dibe
//main array k hath dibena
const fruits = ["Jackfruit", "Orange", "Mango", "Dates","Lemon"];
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

//slice
//starting ar ending index lagbe , start index included end index excluded
//main array te hath dibe na

const result4 = fruits.slice(0, 2);
console.log(result4);

//splice
//main array k change kore fele
//splice(index,noOfRemovedElements,additionalElements)
const result5 = fruits.splice(2,2,"Pineapple","Guava","Watermelon","Cherry"); //2 ta element remove kore j 2 tai e add kora lagbe emon kono rule nai , I can add unlimited elements just oi 2 ta kete ene oi jaygay boshay dibe , ar ei fol pabo main array te
console.log(result5); // 2 no. element theke 2 ta element k kete ene return kore dibe
console.log(fruits);

