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


