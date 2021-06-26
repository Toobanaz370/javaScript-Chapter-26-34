//  Chapter # 26 - 30: MATH METHODS
// 



// Q1. 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// part a :
// var a = prompt("enter any positive number")

// part b :
// b = Math.round(a)

// part c : 
// c = Math.floor(a)

// part d : 
// d = Math.ceil(a)
// document.write("<h1>number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d + "</h1>")


// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = prompt("enter any number")
// part a : 
// a = -Math.abs(num)

// part b :
// b = Math.round(a)

// part c :
// c = Math.floor(a)

// part d :
// d = Math.ceil(a)
// document.write("<h1>number: " + a + "<br>round off value of: " + b + "<br>floor value: " + c + "<br>ceil value: " + d + "</h1>")




// Q3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var number1 = -4
// number1abs = Math.abs(number1)
// var num2 = 5
// num2abs = Math.abs(num2)
// document.write("<h1>The absolute value of " + number1 + " is " + number1abs + "<br>The absolute value of " + num2 + " is " + num2abs +"</h1>")



//  Q4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:


// var a = Math.floor(Math.random() * 6)  + 1; 
// document.write("<h1>random dice value: " + a + "</h1>")


// Q5. . Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser.



// var a = Math.floor(Math.random() * 2)  + 1; 
// if(a === 2){
//     document.write("<h1>" + a + "<br> random coin value: Tails </h1>");
// }
// else{
//     document.write("<h1>" + a + "<br> random coin value: Heads </h1>");
// }


// Q6. Write a program that shows a random number between 1 
// and 100 in your browser.


// var a = Math.floor(Math.random() * 101); 
// document.write("<h1>random number between 1 - 100 is: " + a + "</h1>")


// Q7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var userWeight = prompt("enter weight in kilograms")
// b = userWeight.replace("kilograms" , " ")
// b = userWeight.replace("kgs" , " ")
// document.write("<h1>The weight of user is: " + b +  " kilograms</h1>")


// Q8.. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.



// var randomNumber = Math.floor(Math.random() * 10) + 1;
// var userValue = prompt("Enter a number between 1 - 10")
// if(userValue == randomNumber){
//     alert("Congratulation! \nYou have the correct number")
// }
// else{
//     alert("try again")
// }






//  Chapter # 31 - 34: DATE METHODS



// Q1. Write a program that displays current date and time in 
// your browser.


// var a = new Date();
// document.write("<h1>" + a + "</h1>")


// Q2. Write a program that alerts the current month in words. 
// For example December.


// var monthArr = ["January","February","March","April","May","June","July","August", "September","October","November","December"]
// var a = new Date();
// var b = monthArr[a.getMonth()];
// document.write("<h1>Current month: " + b + "</h1>")


// Q3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.



// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = new Date();
// var b = dayArr[a.getDay()];
// document.write("<h1>Today is " + b + "</h1>")


// Q4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.


// var dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var a = new Date();
// var b = dayArr[a.getDay()];
// if(b === "Sat" || "Sun"){
//     document.write("<h1>It's fun day </h1>")
// }


// Q5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.


// var newDate = new Date();
// var b = a.getDate();
// if(b >= 1 && b <=15){
//         document.write("<h1>First fifteen days of the month</h1>")
// }
// else if(b >= 16 && b <= 31){
//     document.write("<h1> Last days of the month </h1>")
// }


// Q6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.


// var a = new Date()
// var b = a.getTime()
// var c = b/1000*60
// document.write("<h1>Current date: " + a + "<br> Elapsed miliseconds since January 1, 1970: " + b + "<br> Elapsed minutes since January 1, 1970: " + c + "</h1>")


//  Q7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.


// var a = new Date();
// var b = a.getHours();
// if(b >= 00 && b <=11){
//         alert("Its AM")
// }
// else if(b >= 12 && b <= 23){
//      alert("Its PM")
// }


// Q8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.


// var a = new Date();
// a.setMonth(11, 31);
// document.write("<h1>" + a + "</h1>")


// Q9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// var ramadanstartDate = new Date("June 18, 2015")
// var miliseconds = ramadanstartDate.getTime()
// var today = new Date()
// var todaymili = today.getTime()
// var getdiff = todaymili - miliseconds
// var convertToDays = getdiff/(1000*60*60*24)
// var accurateVal = Math.floor(convertToDays)
// document.write("<h1>" + accurateVal + " days have passed since 1st Ramadan, 2015</h1>")


// Q10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.




// Q11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.


// var currentDate = new Date();
// var a = new Date();
// a.setHours(a.getHours() - 1);
// document.write("Current date: " + currentDate  + "<br> <br> 1 hour ago, it was: " + a )


// Q12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?


// var userInput = prompt("Enter your date of birth","June 18, 1996")
// var userDob = new Date(userInput)
// var a = userDob.getTime()
// var b = new Date()
// var c = b.getTime()
// var getdiff = c - a
// var userYear = userInput.slice(-4);
// var convertToDays = getdiff/(1000*60*60*24*30*12)
// var accurateVal = Math.floor(convertToDays)
// document.write("<h1>Your age is " + accurateVal + "<br>Your birth year is "  +  userYear +"</h1>")





// Q14 Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current MonthDATE 
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge



// var customerName = "ABC Customer"
// var month = "February"
// var numOfUnit = 410
// var chargPerUnit = 16
// var netAmountDueDate = numOfUnit * chargPerUnit
// var latePaySurcharge = 350
// var grossAmountAfterDueDate = netAmountDueDate + latePaySurcharge
// document.write("<h1>K-Electric Bill</h1>")
// document.write("<p>Customer Name: " + customerName  + "<br>Current Month: " + month   +  "Number of units: " + numOfUnit  + "<br>Charges per unit: " + chargPerUnit  + "<br><br>Net Amount Payable (within Due Date): " + netAmountDueDate  +  "<br>Late Payment Surcharge: " + latePaySurcharge  + "<br>Gross Amount Payable (after Due Date): " + grossAmountAfterDueDate  +  "</p>")