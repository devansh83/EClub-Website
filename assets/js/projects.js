const buttons = document.querySelectorAll(".button-year");
const projectBoxes = document.querySelectorAll(".project-box");

function handleButtonClick(event) {
    // Remove the "clicked" class from all buttons
    buttons.forEach(button => {
        button.classList.remove("clicked");
    });

    // Add the "clicked" class to the clicked button
    event.target.classList.add("clicked");

    const selectedYear = event.target.id.replace("button", ""); // Extract year from button id
    
    // Show/hide projects based on the selected year
    projectBoxes.forEach(projectBox => {
        const projectYear = projectBox.getAttribute("data-year");

        if (projectYear === selectedYear || selectedYear === "all") {
            projectBox.style.display = "block";
        } else {
            projectBox.style.display = "none";
        }
    });
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

// Initially, show all projects when the page loads
document.getElementById("23").click();
