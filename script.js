// confirm("This application has been developed for education purposes only. May contain some irritating jokes. Please confirm to continue.");

import { checkIfACategoryIsSelected } from "../utils/categorySelected.js";
import { fetchData } from "../utils/fetchData.js";

function main() {
  const container = document.createElement("main");
  document.body.appendChild(container);
  const responseMessageContainer = document.createElement("section");
  document.body.appendChild(responseMessageContainer);
  const buttonGenerateJokes = document.querySelector("#btn");
  buttonGenerateJokes.addEventListener("click", () => {
    const selected = checkIfACategoryIsSelected();
    if (selected) {
      fetchData(container, responseMessageContainer);
    }
  });
}

main();
