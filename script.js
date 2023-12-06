// const date= new Date();

// const renderCalendar=() =>{
//     date.setDate(1);
// const monthDays = document.querySelector(".days");
// const lastDay = new Date(date.getFullYear(), date.getMonth() +1 , 0).getDate();

// const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
// const firstDayIndex = date.getDay();

// const lastDayIndex = new Date(date.getFullYear(), date.getMonth(), 0).getDay();


// const nextDays = 7 - lastDayIndex -1;

// const months = [
//     "January", "Febuary", "March", "April", "May", 
//     "June", "July", "August", "September","October", "November", "December"
// ];

// document.querySelector('.date h1').innerHTML
// =months[date.getMonth()];

// document.querySelector('.date p').innerHTML
// = new Date().toDateString();

// let days = "";

// for(let x = firstDayIndex; x >0; x--){
//     days += `<div class="prev-date">${prevLastDay-x+1}</div>`
// }

// for(let i = 1; i <= lastDay; i++){
//     if(i === new Date().getDate() && date.getMonth()=== new Date().getMonth()){
//         days += `<div class="today">${i}</div>`;

//     }else{
//         days += `<div>${i}</div>`;
//     }
    
    

// }
//     monthDays.innerHTML = days;
// for(let j = 1;j <= nextDays; j++){
//     days +=`<div class="next-date">${j}</div>`
    
// } 
// }




// document.querySelector('.prev').addEventListener('click',() => {
//     date.setMonth(date.getMonth()-1);
//     renderCalendar()
// });

// document.querySelector('.next').addEventListener('click',() => {
//     date.setMonth(date.getMonth()+1);
//     renderCalendar()
// });

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth(), 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January", "Febuary", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div class="calendar-date" data-date="${date.getFullYear()}-${date.getMonth() + 1}-${i}">${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    monthDays.innerHTML = days;

    // Call the function to add icons to specific dates
    addIconsToDates();
};

// Function to add icons to specific dates
function addIconsToDates() {
    const iconsByDate = {
        "2023-12-01": "fa-coffee",   // Example: Coffee icon on December 1, 2023
        "2023-12-15": "fa-birthday-cake",  // Example: Birthday Cake icon on December 15, 2023
        // Add more dates and corresponding icons as needed
    };

    const calendarDates = document.querySelectorAll('.calendar-date');

    calendarDates.forEach((calendarDate) => {
        const date = calendarDate.getAttribute("data-date");

        if (iconsByDate[date]) {
            const icon = document.createElement("i");
            icon.classList.add("fas", iconsByDate[date]);

            const iconContainer = document.createElement("span");
            iconContainer.classList.add("icon");
            iconContainer.appendChild(icon);

            calendarDate.appendChild(iconContainer);
        }
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

// Initial calendar rendering
renderCalendar();
