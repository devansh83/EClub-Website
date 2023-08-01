const buttons = document.querySelectorAll("button");

  function handleButtonClick(event) {
    buttons.forEach(button => {
      button.classList.remove("clicked");
    });

    event.target.classList.add("clicked");
  }

  buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
  });

  