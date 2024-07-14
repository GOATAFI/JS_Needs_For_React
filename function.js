function hello() {
    console.log("Hello");
}

let msg = hello()
console.log(msg); //undefined return korbe karon function e kichu return alada vabe bola na thakle undefined return kore dey

//function expression

const world = function(){
    console.log("world");
}

//arrow function

const helloWorld = () => {
    console.log("Hello World");
}

const obj = () => {
    return {
        a: 5,
        b:7
    }
}

console.log(obj());
