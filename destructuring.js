const person = {
    name : "Nahid",
    age : 42,
    education : {
        degree : "Hons"
    }
}

// const name = person.name
// const age = person.age
// evabe const variable = person.key kore likhte likhte onek time lagbe 

const {name,age,education} = person
console.log(name);
console.log(education);

const {education:{degree}} = person
console.log(degree);