const employees = [
  {
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

console.log(employees);

function employeeBonus(employeeNumber, annualSalary, reviewRating) {
  let bonusPercent = 0
  let compensation = 0
  let bonusAmount = 0

  if (reviewRating === 5) {
    //give 10% bonus of their base salary
    bonusPercent = 10;
  } else if (reviewRating === 4) {
    //give 6% bonus of their base salary
    bonusPercent = 6;
  } else if (reviewRating === 3) {
    //give 4% bonus of their base salary
    bonusPercent = 4;
  } else {
    //give 0% bonus of their base salary - do nothing
  } //end base bonus additions

  if (employeeNumber.length < 5 && annualSalary <= 65000) {
    //give an additional 5% of their base salary
    bonusPercent = bonusPercent - 1;
  }

  if (bonusPercent > 13) {
    //bonus === 13%
    bonusPercent = 13;
  }

bonusAmount= annualSalary * (bonusPercent / 100);
compensation = annualSalary + (bonusPercent / 100); 

  return { bonusPercentage: bonusPercent, totalCompensation: compensation, totalBonus: bonusAmount,}
}// end employeeBonus

console.log('running employeeBonus function with 1 employees info', employeeBonus('62347', '63500', 4));

function employeeReview(employeeArray) {
  console.log(employeeArray);

  for (let i = 0; i < employeeArray.length; i++) {

    let employeeObject = employeeArray[i];
    let name = employeeObject.name;
    let bonusPercentage = employeeObject.bonusPercentage;
    let totalCompensation = employeeObject.totalCompensation;
    let totalBonus = employeeObject.totalBonus;

  }
}

/*
***************************************************

//make a function to take in array of penguins, and a size
//return an array of penguins that are cute and smaller than size

function penguinChecker(listOfPenguins, maxHeight) {
    console.log(listOfPenguins, maxHeight);
    let matchingPenguins = []; // temporary holding box

    for(let i = 0; i < listOfPenguins.length; i++) {
        if(listOfPenguins[i].isCute && listOfPenguins[i].size <= maxHeight) {
            console.log(listOfPenguins[i], 'its cute! and small enough');
            matchingPenguins.push(listOfPenguins[i]);
        }
    }
    //return holding box after loop is done
    return matchingPenguins;
}

const match = penguinChecker(penguins, 0.5)

console.log('all matching penguins', match);




*/

