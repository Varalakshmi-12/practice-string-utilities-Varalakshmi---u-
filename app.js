const utils=require('./stringUtils.js');
console.log(utils.capitalize("hello"));
console.log(utils.capitalize(""));
console.log(utils.capitalize(undefined));
console.log(utils.reverse("hello"));
console.log(utils.reverse("123"));
console.log(utils.reverse(undefined));
console.log(utils.contains("hello world","wr"));
console.log(utils.contains(undefined,'wr'));
console.log(utils.contains("hello world","wo"));
console.log(utils.contains("hello world",undefined));


