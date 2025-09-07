const utils=require('./stringUtils.js');

//test capitalize
console.log(utils.capitalize("hello"));
console.log(utils.capitalize(""));
console.log(utils.capitalize(undefined));
//test reverse
console.log(utils.reverse("hello"));
console.log(utils.reverse("123"));
console.log(utils.reverse(undefined));
//test contains
console.log(utils.contains("hello world","wr"));
console.log(utils.contains(undefined,'wr'));
console.log(utils.contains("hello world","wo"));
console.log(utils.contains("hello world",undefined));


