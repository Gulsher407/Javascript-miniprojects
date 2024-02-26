const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value === '') {
        alert("Please write something.");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value.trim();
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = ''; // Clear input box after adding task
        savedata();
    }
}

listContainer.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

const savedata = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showdata = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call showdata function to load data from localStorage when the page loads
showdata();
