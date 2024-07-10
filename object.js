const person ={
    name : "Nahid",
    age : 24,
    isMarried : false
}

// const name = person.name
// const age = person.age
// const isMarried = person.isMarried
// ^^ amra uporer moto object theke variable declare korte parbo , buuuut it is tooooo long , tai amra destructure korbo

const {name,age,isMarried} = person //done in one line GG , ekhane name same e dite hobe object er variable er name ja , ta ee


const dad = "Nazmul"
//amra ei variable ta k ekta object e dhukabo
const father = {
    dad : dad, //evabeo likhte pari , but jodi object er variable name ar baire declare kora variable name same thake tahole shudu ekbar likhlei hobe
    dad // eituku e enough this is basically means dad : dad
}

const person2 = {...person,name:"Parvez"}
//person2 ta person k fully copy kore nilo and shudu name er jayga change hobe , person e chilo Nahid , ekhon change kore disi Parvez