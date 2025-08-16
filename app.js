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


// Question 2:code
// inputs
let orderAmount = 800;
let customerIsPremiumMember = true;
let isWeekdayBetweenNight = true;
let couponApplied = false;
let sundayMorning = true;
let finalAmount = orderAmount;
// case 1: if orderAmount greater than 1000 they get discount
if(orderAmount>1000 && customerIsPremiumMember){
    finalAmount = orderAmount - (orderAmount*15/100);
    console.log("Benefit: Free Delivary and 15% Discount")
    console.log("Final amount to pay:", finalAmount);
}
//  case 2: if orderAmount between 500 to 1000 and weekday get discount
else if(orderAmount>=500 && orderAmount<=1000 && isWeekdayBetweenNight && !couponApplied){
    finalAmount = orderAmount - (100);
    console.log("Benefit: 100 ruppes discount")
    console.log("Final amount to pay:", finalAmount);
}
// case 3: sunday morning
else if(orderAmount<500 && sundayMorning ){
    finalAmount = orderAmount;
    console.log("Benefit: Free Delivary ")
    console.log("Final amount to pay:", finalAmount);
}
else{
    finalAmount = orderAmount
    console.log("Benefit: none")
    console.log("Final amount to pay:", finalAmount);
}