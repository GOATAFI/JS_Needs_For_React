let names = ["nahid","parvez","mafi"]
let newNames = names.map((name) => {
    return name+"1"
})
console.log(newNames);

//React e jevabe kaaj kore 
names.map((name)=>{
    return <h1>{name}</h1> //protita name er jonno alada h1 tag use korbe
})