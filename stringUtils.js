//capitalize function
function capitalize(str){
    if(typeof str!=="string" || str.length=== 0) return '';
    return str[0].toUpperCase() + str.slice(1); 
}
//reverse function
function reverse(str){
    if(typeof str!=="string" ) return '';
    return str.split("").reverse().join("");
     
}
//contains function
function contains(str,substr){
    if(typeof str!=="string" || typeof substr!=="string" )return false ;
    return str.includes(substr);
}

//exporting functions
module.exports={capitalize,
    reverse,
    contains
};
