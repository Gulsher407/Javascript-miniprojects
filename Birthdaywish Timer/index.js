// JavaScript code
const endDate = new Date("Feb 1, 2024 09:41 AM");

document.getElementById("end-date").innerText = endDate.toLocaleString();

function clock() {
    const now = new Date();

    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
        clearInterval(timer); // Stop the timer if the end date is reached
        document.querySelector(".main").style.display = "none"; // Hide the countdown elements
        document.body.innerHTML = "<div class='fullscreen-message'>Happy Birthday To You >> Gulsher Ali  </div>"; // Display the birthday message in full page
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const inputs = [days, hours, minutes, seconds];

    // Update the input fields with the countdown values
    updateInputs(inputs);
}

function updateInputs(inputs) {
    const inputElements = document.querySelectorAll(".col input[type='text']");
    inputElements.forEach((input, index) => {
        input.value = inputs[index];
    });
}

// Initial call to start the timer
clock();

// Update the timer every second 
const timer = setInterval(clock, 1000);
