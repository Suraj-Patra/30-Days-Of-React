// // 2. First remove all the punctuations and change the string to array and count the number of words in the array
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// // Splitting the words by comma separator.
// let words = text.split(' ');

// // Removing the last special character if there hae any.
// words = words.map((word) => {
//     const last_char = word[word.length-1];
//     return (
//         (!(last_char>='A' && last_char<='Z') &&
//              !(last_char>='a' && last_char<='z'))? 
//                 word.slice(0,word.length-1) : word
//     )
// })

// console.log(words)
// console.log(words.length)



// // 3. In the following shopping cart add, remove, edit items
/* 
   3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added
   3.2 add Sugar at the end of you shopping cart if it has not been already added
   3.3 remove 'Honey' if you are allergic to honey
   3.4 modify Tea to 'Green Tea'
*/

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// !(shoppingCart.includes('Meat')) && shoppingCart.unshift('Meat');

// !(shoppingCart.includes('Sugar')) && shoppingCart.push('Sugar');

// const alergic_to_honey = true;
// (alergic_to_honey) && (shoppingCart.splice(shoppingCart.indexOf('Honey'), 1));

// shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');




// // 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// const countries = require('./countries.js');
// !(countries.includes('Ethiopia')) && (countries.push('Ethiopia'));
// console.log(countries);

// // 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// const webTechs = require('./web_techs');
// (webTechs.includes('Sass'))? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');
// console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);


