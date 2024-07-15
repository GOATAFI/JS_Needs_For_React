// ...arrayName -> spread operator 
//main array k hath dey na
const fruits = ["Banana","Apple"]

const result = [...fruits]
result.push("Kola")
console.log(result);
console.log(fruits);

//rest 
function sum(text,...rest){
    const sum = rest.reduce((sum,cur)=>sum+cur,0)
    console.log(`${text}${sum}`);
}
sum("The sum is ",1,2,3,4,5,6,9)