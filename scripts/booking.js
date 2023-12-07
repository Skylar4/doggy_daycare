/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// this will select the calculated cost in the booking page
const costPerDay = document.getElementById("calculated-cost");

//this value will be changed as we move check the days of the week clicked 
var numberOfDay = 0;
//each day of the week that will have to be changed when clicked on. 
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wendsday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
//full and half day elements
const full = document.getElementById("full");
const half = document.getElementById("half");
const clear = document.getElementById("clear-button");




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful he
function changeColor(day){
    if (day.classList.contains("clicked")){
        day.classList.remove("clicked");
        numberOfDay -= 1;
    }
    else{
        day.classList.add("clicked");
        numberOfDay += 1;
    }
}
monday.addEventListener("click", function(){
    changeColor(monday);
    calculate();
 });
 tuesday.addEventListener("click", function(){
    changeColor(tuesday);
    calculate();
 });
 wendsday.addEventListener("click", function(){
    changeColor(wendsday);
    calculate();
 });
 thursday.addEventListener("click", function(){
    changeColor(thursday);
    calculate();
 });
 friday.addEventListener("click", function(){
    changeColor(friday);
    calculate();
 });





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearAll(){
    let list_of_days = [monday,tuesday,wendsday,thursday,friday];
    for (let day of list_of_days){
        day.classList.remove("clicked");
    }
    full.classList.add("clicked");
    half.classList.remove("clicked");
    numberOfDay = 0;
}
clear.addEventListener("click", function(){
    clearAll();
    calculate();
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener("click", function(){
    changeColor(half);
    changeColor(full);
    calculate();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

    full.addEventListener("click",function(){
        changeColor(full);
        changeColor(half);
        calculate();
    });



    /********* calculate *********/
    // when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

    function calculate(){
        if (full.classList.contains("clicked")){
            costPerDay.innerHTML = numberOfDay * 35;
        }
        if (half.classList.contains("clicked")){
            costPerDay.innerHTML = numberOfDay * 20;
        }
    }
