// // 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// const num = Number(prompt('Enter your age : '));
// (num>=18)
//     ? console.log('Old enough to drive.')
//     : console.log(`You have to wait ${18-num} more years.`);


// // 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// const my_age = 22;
// const your_age = prompt('Enter your age : ');
// (your_age>my_age)
//     ? console.log(`You are ${your_age-my_age} year(s) older than me.`)
//     : console.log(`You are ${my_age-your_age} year(s) younger than me.`);


// // 3. f a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways : if-else, ternary
// const a = 3, b = 4;
// if(a>b) {
//     console.log(`${a} is greater than ${b}`);
// } else {
//         console.log(`${a} is less than ${b}`);
//     }
    
// (a>b)
//     ? console.log(`${a} is greater than ${b}`)
//     : console.log(`${a} is less than ${b}`);



// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const a = 5;
(a&1)? console.log(`${a} is odd`):console.log(`${a} is even`);