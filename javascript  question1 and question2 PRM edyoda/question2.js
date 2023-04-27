let totalClasses = prompt("Enter total number of classes: ");
let attendedClasses = prompt("Enter number of classes attended: ");
let medicalCondition = prompt("Do you have a medical condition? (Y/N): ");

let attendanceCriteria = 75;
if (medicalCondition === 'Y') {
  attendanceCriteria = 60;
}

let attendancePercentage = (attendedClasses / totalClasses) * 100;
let isEligible = attendancePercentage >= attendanceCriteria;

console.log(isEligible);
