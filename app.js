// Question 1:code

let normalPrice = 1500;
let age = 21;
let isWeekday = true;
let isFestivalWeek = false;
let isStudent = true;
let hasStudentID = true;
let currentMonth = "August";
let dayOfWeek = "Monday";
let finalPrice = normalPrice;
// case 1 :senior citizen discount
if(age>60 && isWeekday && !isFestivalWeek){
    finalPrice = normalPrice - (normalPrice*3/10);
    console.log(finalPrice);
}
//  case 2: student discount
else if(age<25 && isStudent && hasStudentID && currentMonth !== "december"){
    finalPrice = normalPrice - (normalPrice * 2/10);
    console.log(finalPrice);
}
// case 3: sunday discount
else if(dayOfWeek === "sunday"){
    finalPrice = normalPrice -(normalPrice*1/10);
    console.log(finalPrice);
}
// case 4:no discount
else{
    finalPrice = normalPrice;
    console.log(finalPrice);
}
