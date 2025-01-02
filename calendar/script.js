// container of calendar
let calendarContainer = document.querySelector('.calendar');

// Function to generate the calendar
function generateCalendar(year, month) {
    // Array of month names
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    //month and year element (div.monthandyear)
    let monthYearElement = calendarContainer.querySelector('.monthandyear');

    // Set the month and year text in div.monthandyear
    monthYearElement.textContent = monthNames[month] + ' ' + year;

    // dates container
    let datesContainer = calendarContainer.querySelector('.dates');

    // Clear the previous dates
    datesContainer.innerHTML = '';

    // number of days in the month
    let totalDays = new Date(year, month + 1, 0).getDate();

    // first day of the month
    let firstDay = new Date(year, month, 1).getDay();

    // Creating a ul element to store the dates
    let datesList = document.createElement('ul');

    // Add empty li elements for the days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        let emptyListItem = document.createElement('li');
        emptyListItem.classList.add('empty-date');
        datesList.appendChild(emptyListItem); //it will append the empty list of dates of previes month 
    }

    // li elements for the days of the current month
    for (let i = 1; i <= totalDays; i++) {
        let dateListItem = document.createElement('li');
        dateListItem.textContent = i;

        datesList.appendChild(dateListItem);
    }

    // Append the list of dates to the dates container
    datesContainer.appendChild(datesList);

    //Remove hover effect form empty list
    // Function to remove hover effects from empty list items
    function removeHoverEffect() {
        let emptyListItems = document.querySelectorAll('.dates ul li.empty-date');
        emptyListItems.forEach((item) => {
            item.classList.remove('hover-date'); // Ensure any hover class is removed
        });
    }
    removeHoverEffect()
}


// Get the current date
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();


// Generate the calendar for the current month
generateCalendar(currentYear, currentMonth);


// Function to navigate to the previous month
function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
}

// Function to navigate to the next month
function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
}

// Get the previous and next buttons
let prevButton = calendarContainer.querySelector('.prev');
let nextButton = calendarContainer.querySelector('.next');

// Add event listeners to the buttons
prevButton.addEventListener('click', previousMonth);
nextButton.addEventListener('click', nextMonth);
// Get the current day
let currentDay = new Date().getDate();

// Get all the list items under ".dates ul"
let dateElements = document.querySelectorAll(".dates ul li");

// Loop through the list items to find the current day
dateElements.forEach((element) => {
    if (parseInt(element.textContent.trim()) === currentDay) {
        // Add a class to highlight the current date
        element.classList.add('highlight');
    }
});


// Variable to declare whether darkmode is enabled or disabled
let isDarkMode = false

// Dark mode function
function darkModeFunc() {
    if (!isDarkMode) {
        document.body.style.backgroundColor = 'rgb(32, 29, 29)'
        document.body.querySelector('h1').style.color = 'white'
        document.body.querySelector('.dates').style.filter = 'invert(0.2)'
        isDarkMode = true

    }
    else {
        document.body.style.backgroundColor = ''
        document.body.querySelector('h1').style.color = ''
        document.body.querySelector('.dates').style.filter = ''
        isDarkMode = false

    }

}

let nightmode_bar = document.querySelector('#nightmode_bar')
nightmode_bar.addEventListener('click', darkModeFunc)



let isToggle = false

// Toggle function
function ToggleFunc() {
    if (!isToggle) {
        let slide = document.querySelector('#togglebutton')
        nightmode_bar.addEventListener('click', (e) => {
            slide.style.left = '20px'
        })
        isToggle = true

    }
    else {
        let slide = document.querySelector('#togglebutton')
        nightmode_bar.addEventListener('click', (e) => {
            slide.style.left = ''
        })
        isToggle = false

    }
}
nightmode_bar.addEventListener('click', ToggleFunc)


