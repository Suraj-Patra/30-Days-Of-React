// // 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// ages.sort((a,b) => a-b);
// const ages_len = ages.length;
// const min_age = ages[0];
// const max_age = ages[ages_len-1];
// const median_age = (ages_len&1)? ((ages[ages_len/2]+ages[ages_len/2 + 1])/2) : (ages[ages_len/2]);

// let avg_age = 0;
// for(let age of ages) {
//     avg_age += age;
// }
// avg_age /= ages_len;

// const age_range = max_age-min_age;



const countries = require('./countries.js');

// // 2. Slice the first ten countries from the countries array
// const first_ten_countries = countries.slice(0, 10);


// // 3. Find the middle country(ies) in the countries array
// const countries_len = countries.length;
// const middle_index = Math.floor(countries_len/2);
// (countries_len & 1)
//     ? console.log(countries[middle_index], countries[middle_index+1])
//     : console.log(countries[middle_index]);


// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const middle_index = Math.ceil(countries.length/2);
const first_half = countries.slice(0, middle_index);
const second_half = countries.slice(middle_index);

console.log(first_half.length);
console.log(second_half.length);
