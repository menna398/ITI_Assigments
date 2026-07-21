const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(".form-control");

  let isValidInputs = true;

  inputs.forEach((input) => {
    if (!input.value) {
      isValidInputs = false;
    }
  });

  if (!isValidInputs) {
    alert("Please fill all fields");
  } else if (inputs[1].value < 18) {
    alert("You are under age");
  } else {
    alert("Registration Completed");

    console.log(`Name: ${inputs[0].value} | Age: ${inputs[1].value} | Job: ${inputs[2].value}`);
  }
});
