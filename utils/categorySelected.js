export function checkIfACategoryIsSelected() {
  const checkboxes = document.getElementsByName("category");
  let selected = false;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selected = true;
      break;
    }
  }
  if (!selected) {
    document.querySelector("#btn").innerText = "Please select a category";
    document.querySelector("#btn").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("#btn").innerText = "Generate Jokes";
      document.querySelector("#btn").style.backgroundColor = "rgb(12, 1, 37)";
    }, 1000);
  }
  return selected;
}