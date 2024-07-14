//primitive
let a = 6
let b = 7
a = b
console.log(a);
console.log(b);
a = 8
console.log(a);
console.log(b); // a er value barleo b er value bare nai cz b only copied the value of a


//reference
let c = ["Js","Python","Go"]
let d = ["Html","Css"]

d = c
console.log(c);
console.log(d);

c.push("Rust")
console.log(c);
console.log(d); // c te push korleo d te change chole astise cz d copied the reference of c 
