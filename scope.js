let lang = "Bangla"

function learn(topic){
    lang = topic
    console.log(`I am learning ${topic}`);
}

learn("Javascript")

console.log(`I am learning ${lang}`);

//ekhane duitatei Javascript asbe karon global scope er lang k local scope access korte pare and change ou korte pare , only way to fix this issue is function er vitor jei variable ache setakeo var/let diye likha 


let lang2 = "English"

function learn2(topic){
    let lang2 = topic
    console.log(`I am learning ${topic}`);
}

learn2("Spanish")

console.log(`I am learning ${lang2}`);