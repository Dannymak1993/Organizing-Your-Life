// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});

// Calendar App

// Read from localStorage
// Populate page with data if exists in localStorage

// click event with delegation to target the text area assoc with the save button
// use the sibling DOM method to traverse the DOM, event.target parent/sibling
// capture the value of the text area, save string to local storage

// Use Dayjs to get current time use military time
// read the value of the time block from the html
// if statement that compares the vales and adds a class to change the color
// loop through html elements and read a data-attribute time

// Get the current date and format it using Dayjs
var currentDate = dayjs().format("dddd, MMM DD, YYYY");

// Update the text content of the time element with the formatted date string
document.getElementById("current-date").textContent = currentDate;

$(".saveBtn").click(function(){
    var textArea = $(this).siblings(".description").val();
    var dataTime = $(this).parent().attr("data-hour");
    console.log(dataTime, textArea);
    localStorage.setItem(dataTime, textArea);
});

for (let i=9; i<24; i++){
    $(`#${i}text`).val(localStorage.getItem(`${i}`));
}


function colorChange() {
    // Get the current hour in 24-hour format
    var currentHour = parseInt(dayjs().format('H'));

    // Loop through each time block
    $('.time-block').each(function () {
        // Get the hour of the time block
        var hour = parseInt($(this).data("hour"));

        // Add or remove the appropriate class based on the hour and current time
        if (hour < currentHour) {
            $(this).removeClass('present future').addClass('past');
        } else if (hour === currentHour) {
            $(this).removeClass('past future').addClass('present');
        } else {
            $(this).removeClass('past present').addClass('future');
        }
        console.log(hour);
        console.log(currentHour);

    });
    setInterval(colorChange, 60000);
}

// Call the colorChange function when the page first loads
colorChange();

// Call the colorChange function every minute to update the colors


