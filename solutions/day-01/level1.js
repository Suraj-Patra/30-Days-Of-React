const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

// 1. Declare an empty array;
let arr = [];

// 2. Declare an array with more than 5 number of elements
arr = [1,2,3,4,5,6];

// 3. Find the length of your array
const len = arr.length;

// 4. Get the first item, the middle item and the last item of the array
const first_item = arr[0];
const middle_item = arr[Math.floor(len/2)];
const last_item = arr[len-1];

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 0.3, 'a', "hello", [3,4], {name: 'Suraj'}, true];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// // 7. Print the array using console.log()
// console.log(itCompanies);

// // 8. Print the number of companies in the array
// console.log(itCompanies.length);

// // 9. Print the first company, middle and last company
// console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length/2)], itCompanies[itCompanies.length-1]);

// // 10. Print out each company
// for(let company of itCompanies) {
//     console.log(company);
// }

// // 11. Change each company name to uppercase one by one and print them out
// for(let company of itCompanies) {
//     console.log(company.toUpperCase());
// }

// // 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// const companies_str = itCompanies.toString();
// console.log(`${companies_str} are big IT companies.`);

// // 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// if(itCompanies.includes('Google')) {
//     console.log('Found!');
// } else {
//     console.log('Found!');
// }

// // 14. Filter out companies which have more than one 'o' without the filter method
// const more_than_one_o_company = [];
// for(let company of itCompanies) {
//     const o_len = (company.match(/o/g)||[]).length;
//     (o_len>1) && more_than_one_o_company.push(company);
// }
// console.log(more_than_one_o_company);

// // 15. Sort the array using sort() method
// console.log(itCompanies.sort());

// // 16. Reverse the array using reverse() method
// console.log(itCompanies.reverse());

// // 17. Slice out the first 3 companies from the array
// const first_3_companies = itCompanies.slice(0,3);

// // 18. Slice out the last 3 companies from the array
// const last_3_companies = itCompanies.slice(itCompanies.length-3);

// // 19. Slice out the middle IT company or companies from the array
// const sliced_middle_company = itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor(itCompanies.length/2)+1);

// // 20. Remove the first IT company from the array
// const removed_first_company = itCompanies.shift();

// // 21. Remove the middle IT company or companies from the array
// const removed_middle_company = itCompanies.splice(Math.floor(itCompanies.length/2), 1);

// // 22. Remove the last IT company from the array
// const removed_last_company = itCompanies.pop();

// 23. Remove all IT companies
itCompanies = [];