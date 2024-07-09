let age = 16;
let name;
//if-else diye korle , code boro
if (age > 10) {
  name = "Nahid";
} else {
  name = "Mafi";
}

// ternary operator diye korle code choto
let name1 = age >10 ? "Nahid" : "Mafi"

//React e jemon --
const Component = () => {
    return age > 10 ? <div>Nahid</div> : <div>Mafi</div>
}