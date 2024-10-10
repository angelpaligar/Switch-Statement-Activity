let dayOfWeek = prompt("Enter a day of the week:");

switch (dayOfWeek.toLowerCase()) {
  case "Monday":
    console.log("Task for Monday: Do Laundry.");
    break;
  case "Tuesday":
    console.log("Task for Tuesday: Rest and Play CODM.");
    break;
  case "Wednesday":
    console.log("Task for Wednesday: General Cleaning.");
    break;
  case "Thursday":
    console.log("Task for Thursday: Practice Dance for School.");
    break;
  case "Friday":
    console.log("Task for Friday: Do School Activities.");
    break;
  case "Saturday":
    console.log("Task for Saturday: Go out with the Family.");
    break;
  case "Sunday":
    console.log("Task for Sunday: Go to Church.");
    break;
  default:
    console.log("Invalid day of the week.");
}
