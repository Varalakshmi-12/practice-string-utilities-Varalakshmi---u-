function capitalize(str){
    console.log( str[0].toUpperCase() + str.slice(1)); 
}
//capitalize("hello");
function reverse(str){
    let reverseStr=str.split("").reverse().join("");
     console.log(reverseStr);
}
//reverse("hello");
function contains(str,substr){
    return str.includes(substr);
}
//contains("Hello world","or");
console.log(contains("Hello world","or"));
module.exports={capitalize:capitalize,
    reverse:reverse,
    contains:contains
};
