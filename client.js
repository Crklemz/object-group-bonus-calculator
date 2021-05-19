const employees = [{
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
},
{
  name: 'Jem',
  employeeNumber: '62347',
  annualSalary: '63500',
  reviewRating: 4
},
{
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
},
{
  name: 'Robert',
  employeeNumber: '26835',
  annualSalary: '66000',
  reviewRating: 1
},
{
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
}
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function employeeBonus(employee) {
let bonusPercent = 0
let compensation = 0
let bonusAmount = 0

if (employees.reviewRating === 5) {
  //give 10% bonus of their base salary
  bonusPercent = 10;
} else if (employees.reviewRating === 4) {
  //give 6% bonus of their base salary
  bonusPercent = 6;
} else if (employees.reviewRating === 3) {
  //give 4% bonus of their base salary
  bonusPercent = 4;
} else {
  //give 0% bonus of their base salary - do nothing
} //end base bonus additions

console.log('in employeeBonus - bonusPercent is', bonusPercent);


if (employees.employeeNumber < 5) {
  bonusPercent += 5
}

if (employee.annualSalary > 65000) {
  bonusPercent -= 1;
}

if (bonusPercent > 13) {
  //bonus === 13%
  bonusPercent = 13;
}

bonusAmount = employees.annualSalary * (bonusPercent / 100);

compensation = employees.annualSalary * (1 + (bonusPercent / 100));

return {
  bonusPercentage: bonusPercent,
  totalCompensation: compensation,
  totalBonus: bonusAmount,
}
} // end employeeBonus

console.log('running employeeBonus function with 1 employees info --> should receive 6% bonus', employeeBonus(employees[1]));
console.log('running employeeBonus function with 1 employees info --> should receive 13% bonus', employeeBonus(employees[2]));


// function employeeReview(employeeArray) {
// console.log('in employeeReview');



// for (let i = 0; i < employeeArray.length; i++) {


//   let employeeObject = employeeArray[i];

//   let name = employeeObject.name;
//   let bonusPercentage = employeeObject.bonusPercentage;
//   let totalCompensation = employeeObject.totalCompensation;
//   let totalBonus = employeeObject.totalBonus;

//   employeeObject.push(employeeBonus(employeeArray))

// }
// return employeeObject;
// }

// console.log('running employeeReview', employeeReview(employees));

