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
else if(age<25 && isStudent && hasStudentID && currentMonth !== "December"){
    finalPrice = normalPrice - (normalPrice * 2/10);
    console.log(finalPrice);
}
// case 3: sunday discount
else if(dayOfWeek === "Sunday"){
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

//  question 3:code

//  inputs
let loanAmount = 20000;
let borrowersCreditCardScore = 700;
let incomePerMonth = 60000;
let isGovernmentEmployee = true;
let iscurrentMonth = "december";
let interestRate = 0;
//  case 1: loan > 10 lakhs and credit score > 800
if (loanAmount > 100000 && borrowersCreditCardScore > 800){
    interestRate = 7;
    console.log("Condition 1: Loan > 10 lakhs and Credit Score > 800 -> interest Rate  is 7%");
    if (isGovernmentEmployee){
        interestRate -= 0.5;
        console.log("Government Employee -> Extra 0.5% is reduced")
    }
}
// case 2: Credit score between 650 and 800, and income > 50k
else if (borrowersCreditCardScore >=650 && borrowersCreditCardScore<=800 && incomePerMonth > 50000){
    interestRate = 9;
    console.log("Condition 2: Credit Score between 650/800 and Income > 50000 -> interest Rate 9%");
    if (isGovernmentEmployee){
        interestRate -= 0.5;
        console.log("Government Employee -> Extra 0.5% is reduced")
    }
}
// case 3: festival discount in December
else if (iscurrentMonth){
    interestRate = interestRate - 1;
      console.log("Condition 3: Loan in December -> 1% Festival Discount applied");
}
// case 4 : none
else {
    console.log("Condition 4: No special condition -> normal interest Rate 10%");
}

// question 4:code

//  inputs

let orderValue = 3000;
let destination = "outsideTheCity";
let isPriority = true;
let isPremiumMember = true;
let isWeekend = true;
let shippingCharge = 0; 
// case 1: delivery within same city and priority
if (destination === "sameCity" && isPriority){
    if(orderValue > 2000){
        shippingCharge = 0;
        console.log("condition 1: same city and have priority and ordervalue > ₹2000 means free shippping");
    }else {
        shippingCharge = 50;
        console.log("condition 1: same city and have priority and ordervalue <= ₹2000 means  shippping charger is ₹50");
    }

}
// case 2: delivery outside city but within same state
else if(destination === "outsideTheCity"){
    if(orderValue > 5000){
        shippingCharge = 0;
        console.log("condition 2: outside the city but same state and have priority and ordervalue > ₹5000 means free shippping");
    }else {
        shippingCharge = 100;
        console.log("condition 2: outside th city but same state and have priority and ordervalue <= ₹5000 means  shippping charger is ₹100");
    }
}
//  case 3: delivery to another state 
else if (destination === "anotherState"){
    if (isPremiumMember && isWeekend){
        shippingCharge = 100;
        console.log("cndition 3 : anthore state and has premiun and it is weekend means shipping charge is ₹100");
    }else {
       shippingCharge = 200;
       console.log("condition 3: another state no premiun means shipping charge ₹200");
    }
}
// 
else {
    console.log("enter the correct destination");
}

// question 5 : code

// inputs
let gymMonthlyFee = 3000;
let membershipType = "silver";
let attendanceDays = 16;
let paymentMode = "UPI";
let cashback = 0;
let finalPayableAmount = gymMonthlyFee;
// case 1: gold membership
if(membershipType === "gold" && attendanceDays >20 && paymentMode === "UPI"){
    cashback = 500;
    finalPayableAmount = gymMonthlyFee - cashback;
    console.log( finalPayableAmount);
}
// case 2:silver membership
else if(membershipType === "silver" && attendanceDays > 15 && paymentMode === "UPI"){
    cashback = 300;
    finalPayableAmount= gymMonthlyFee - cashback;
    console.log( finalPayableAmount);
}
// case 3 : Bronze membership
else if (membershipType === "bronze" && attendanceDays > 10 && paymentMode === "debitCard"){
    cashback = 100;
    finalPayableAmount = gymMonthlyFee - cashback;
    console.log( finalPayableAmount);
}
// case 4 : no membership
else{
    cashback = 0;
    finalPayableAmount = gymMonthlyFee - cashback ;
    console.log( finalPayableAmount);
}

// question 6 :code
// inputs
let cupSize = "medium";
let addOns = "flavored Syrup";
let addOncost =  0;
let cupSizeCost = 0;
let totalbill = cupSizeCost+addOncost;
switch(cupSize+"-"+addOns){
    case "small-extra Shot": 
        addOncost = 30;
        cupSizeCost = 100;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "small-flavored Syrup":
        addOncost = 35;
        cupSizeCost = 100;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "small-whipped Cream":
        addOncost = 40;
        cupSizeCost = 100;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
     case "medium-extra Shot":
        addOncost = 30;
        cupSizeCost = 150;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "medium-flavored Syrup":
        addOncost = 35;
        cupSizeCost = 150;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "medium-whipped Cream":
        addOncost = 40;
        cupSizeCost = 150;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
     case "large-extra Shot":
        addOncost = 30;
        cupSizeCost = 200;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "large-flavored Syrup":
        addOncost = 35;
        cupSizeCost = 200;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "large-whipped Cream":
        addOncost = 40;
        cupSizeCost = 200;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
     case "extraLarge-extra Shot":
        addOncost = 30;
        cupSizeCost = 250;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "extarLarge-flavored Syrup":
        addOncost = 35;
        cupSizeCost = 250;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    case "extraLarge-whipped Cream":
        addOncost = 40;
        cupSizeCost = 250;
        totalbill = cupSizeCost + addOncost;
        console.log(totalbill);
    break;
    default:
        console.log("invalid cup size or Invalid add-on");
    break;

}

// question 7 : code

// inputs
let rechargePlan = "comboPack";
let isSpecialWeek = true;
let cost = 0;
let validity = 0;
// plan and special week
switch(rechargePlan + "-" + isSpecialWeek){
    // case 1: talktime plan and special week
    case "talktime-true":
        cost = 150;
        validity = 28 + 2;
        console.log(`selected plan: Talktime -> ₹150 and validity for 28 days and extra 2 days as special week days`);
        break;
    // case 2: talktime plan no special week
    case "talktime-false":
        cost = 150;
        validity = 28;
        console.log(`selected plan: Talktime -> ₹150 and validity for 28 days`);
        break;
    // case 3 : dataPack plan and special week
    case "dataPack-true":
        cost = 250;
        validity = 30 + 2;
        console.log(`Selected plan: Data Pack -> ₹250 and validity for 30 days and extra 2 days as special week days`);
        break;
    // case 4: dataPak plan no special week
    case "dataPack-false":
        cost = 250;
        validity = 30;
        console.log(`Selected plan: Data Pack -> ₹250 and validity for 30 days`);
        break
    // case 5:combo Pack plan and special week
    case "comboPack-true":
        cost = 350;
        validity = 31 + 2;
        console.log(`Selected plan: Combo Pack -> ₹350 and validity for 31 days and extra 2 days as special week days `);
        break;
    // case 6: combo pack no special week
     case "comboPack-false":
        cost = 350;
        validity = 31;
        console.log(`Selected plan: Combo Pack -> ₹350 and validity for 31 days`);
        break;
    // case 7: unlimited plan and special week
    case "unlimitedPlan-true":
        cost = 500;
        validity = 84 + 2;
        console.log(`Selected plan: unlimited plan -> ₹500 and validity for 84 days and extra 2 days as special week days`);
        break;
    // case 8: unlimited plan no special week
    case "unlimitedPlan-false":
        cost = 500;
        validity = 84;
        console.log(`Selected plan: unlimited plan -> ₹500 and validity for 84 days`);
        break;
    default:
        console.log("Invalid Plan");
        break;  
}

//  question 8 : code

//  inputs 
let category = "lunch";
let item = "vegthali";
let itemQuantity = 1;
let itemCost = 0;
let totalcost = itemCost * itemQuantity;
// switch on category
switch(category){
    // case 1: breakfast category
    case "breakfast":
        // switch on  breakfast items
        switch(item){
            case "idli":
                itemCost = 30;
                totalcost = itemCost * itemQuantity;
                console.log(`Breakfast -> Idli x${itemQuantity} = ₹${totalcost}`);
                break;
            case "dosa":
                itemCost = 45;
                totalcost = itemCost * itemQuantity;
                console.log(`Breakfast -> Dosa x${itemQuantity} = ₹${totalcost}`);
                break;
            case "paratha":
                itemCost = 55;
                totalcost = itemCost * itemQuantity;
                console.log(`Breakfast -> paratha x${itemQuantity} = ₹${totalcost}`);
                break;
            default:
                console.log("Item not available in breakfast menu");
                break;
        }
    break;
    // case 2: lunch category
    case "lunch":
        // switch on lunch items
        switch(item){
            case "vegthali":
                itemCost = 150;
                totalcost = itemCost * itemQuantity;
                console.log(`Lunch -> vegthali x${itemQuantity} = ₹${totalcost}`);
                break;
            case "fried rice":
                itemCost = 100;
                totalcost = itemCost * itemQuantity;
                console.log(`Lunch -> fried rice x${itemQuantity} = ₹${totalcost}`);
                break;
            case "panner briyani":
                itemCost = 150;
                totalcost = itemCost * itemQuantity;
                console.log(`Lunch -> panner briyani x${itemQuantity} = ₹${totalcost}`);
                break;
            default:
                console.log("Item not available in lunch menu");
                break;
        }
    break;
    // case 3: dinner category
    case "dinner":
        //  switch on dinner items
        switch(item){
            case "chicken briyani":
                itemCost = 250;
                totalcost = itemCost * itemQuantity;
                console.log(`Dinner ->chicken briyani x${itemQuantity} = ₹${totalcost}`);
                break;
            case "veg briyani":
                itemCost = 200;
                totalcost = itemCost * itemQuantity;
                console.log(`Dinner ->veg briyani x${itemQuantity} = ₹${totalcost}`);
                break;
            case "roti":
                itemCost = 80;
                totalcost = itemCost * itemQuantity;
                console.log(`Dinner ->roti x${itemQuantity} = ₹${totalcost}`);
                break;
            default:
                console.log("Item not available in dinner menu");
                break;
        }
    break;
    default:
        console.log("category or item is not avaliable");
        break;

}

// question 9: code

let bookCategory = "magazine";
let finePerday = 5;
let overdueDays = 7;
let isUserStudent = true;
let totalFine = 0;
switch(bookCategory){
    // case 1: fiction category
    case "fiction":
        // switch on is user student
        switch(isUserStudent){
            case true:
                totalFine = (overdueDays * finePerday)/2;
                break;
            case false:
                totalFine = overdueDays * finePerday;
                break;
        }
        console.log(`Fiction book fine: ₹${totalFine}`);
        break;
     // case 2: Non-fiction category
    case "non-fiction":
         switch(isUserStudent){
            case true:
                totalFine = (overdueDays * finePerday)/2;
                break;
            case false:
                totalFine = overdueDays * finePerday;
                break;
        }
        console.log(`Non-Fiction book fine: ₹${totalFine}`);
        break;
     // case 3: Reference book category
    case "reference":
         switch(isUserStudent){
            case true:
                totalFine = (overdueDays * finePerday)/2;
                break;
            case false:
                totalFine = overdueDays * finePerday;
                break;
        }
        console.log(`Reference book fine: ₹${totalFine}`);
        break;
     // case 4: magazine category
    case "magazine":
         switch(isUserStudent){
            case true:
                totalFine = (overdueDays * finePerday)/2;
                break;
            case false:
                totalFine = overdueDays * finePerday;
                break;
        }
        console.log(`Magazine book fine: ₹${totalFine}`);
        break;
    default:
        console.log("Invalid category");
        break;
}

