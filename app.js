// Getting inputs 

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const btn = document.getElementById("btn");

btn.addEventListener("click",checkAge) //Adding 'click' event listener to button



// Age checking function
function checkAge(){
    let dd = day.value;
    let mm = month.value;
    let yyyy = year.value;

    let dob = new Date(`${mm}/${dd}/${yyyy}`);


    var diff = Date.now() - dob;
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    var age = Math.floor(days/365)

    console.log(age)
    if(age < 15){
        alert("Your age is restricted")
    }
    else{
        window.location = "https://www.google.com/";
    }
}