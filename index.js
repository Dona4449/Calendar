const date = new Date();

const day = date.getDate();
console.log(day);

const month = date.getMonth();
console.log(month);

const year = date.getFullYear();
console.log(year);

const monthDays = document.querySelector('.dates');

const lastDay = new Date(date.getFullYear(), date.getMonth()+1 , 0).getDate();
console.log(lastDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.querySelector(".date h1").innerHTML = months[month];

document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";

for(let i=1 ; i<= lastDay ; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days+= `<div class="currDate">${i}</div>`;
    }
    else{
        days += `<div>${i}</div>`;
        monthDays.innerHTML = days;
    }
}