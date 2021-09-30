const inputs = document.querySelectorAll(".item input[type='checkbox']");

let lastChecked;
function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    inputs.forEach((input) => {
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        input.checked = true;
      }
    });
  }

  lastChecked = this;
  console.dir(lastChecked);
}

inputs.forEach((input) => {
  input.addEventListener("click", handleCheck);
});
