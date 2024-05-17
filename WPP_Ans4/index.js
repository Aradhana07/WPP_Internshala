let todayDate = new Date();
console.log("Today's date is defined as: ", todayDate)
let christmasYear = todayDate.getFullYear();
if (todayDate.getMonth() == 11 && todayDate.getDate() > 25) {
   christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24;
let daysLeft = Math.ceil(
   (christmasDate.getTime() - todayDate.getTime()) / (dayMilliseconds)
);
console.log("The number of days left for christmas is: ")
console.log(daysLeft)