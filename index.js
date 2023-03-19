const date = new Date();
function showCal(date){
    
    const day = date.getDate();
    
    const month = date.getMonth();
    
    const year = date.getFullYear();
    
    const monthDays = document.querySelector('.dates');
    
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1 , 0).getDate();
    
    const firstDayInd = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    
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
    
    document.querySelector(".date h1").innerHTML = months[month] + " " + date.getFullYear();
    
    document.querySelector(".date p").innerHTML = new Date().toDateString();
    
    let days = "";
    
    for(let j=firstDayInd ; j>=1 ; j--){
        days+= `<div class="noBorder"></div>`
    }
    
    for(let i=1 ; i<= lastDay ; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days+= `<div class="currDate">${i}</div>`;
        }
        else{
            days += `<div>${i}</div>`;
            monthDays.innerHTML = days;
        }
    }
}



document.getElementById("pM").addEventListener("click", function(){
    date.setMonth(date.getMonth()-1);
        showCal(date);
});

document.getElementById("nM").addEventListener("click", function(){
    date.setMonth(date.getMonth()+1);
        showCal(date);
});

document.getElementById("todayDate").addEventListener("click", function(){
    showCal(new Date());
});

showCal(date);