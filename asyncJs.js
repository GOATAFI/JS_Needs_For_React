function getData(){
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = response.josn()
    console.log(data);
}

// ^^ uporer ei function er vitor fetch() internet theke ekta data call kore antese , ekhon ei data ashar to ekta somoy lagbe , ei somoy er agei jodi amra process shuru kore dei tahole dekha jbe j data pauar agei kaaj shuru hoye gese and kono labh e hoynay tai amra fetch er age await dibo , ei j fetch er age await dilam , ekhon function takee async kore dite hobe

async function getData2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data);
}

// getData() //error pabo async await na deyar jonno
getData2()

function bigWork(){
    //onek kaj korchi
    return getData2()
}

//ekhon bigWork function dekhe mone hoite pare j getData() er return kora data e amra peye jabo kintu emon ta hobe na , async function always ekta promise return kore so bigWork() keo async await kore nite hobe

(async function(){
const result = await bigWork() //now OKKK
})()