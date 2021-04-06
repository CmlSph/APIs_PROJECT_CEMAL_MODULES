import { generateURL } from "../utils/generateURL.js";

export function fetchData(container, responseMessageContainer) {
  container.innerHTML = "";
  responseMessageContainer.innerHTML = "";

  const url = generateURL();

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      if (jsonData.error) {
        const responseMessage = document.createElement("p");
        responseMessage.innerHTML =
          "No jokes were found that match your provided filter(s).";
        responseMessage.id = "responseMessage";
        responseMessageContainer.appendChild(responseMessage);
        return;
      }
      for (let i = 0; i < jsonData.jokes.length; i++) {
        const jokesButton = document.createElement("button");
        const containerParaAnswer = document.createElement("div");
        const paraAnswer = document.createElement("p");
        container.appendChild(jokesButton);

        containerParaAnswer.appendChild(paraAnswer);
        container.appendChild(containerParaAnswer);

        jokesButton.innerText =
          jsonData.jokes[i].setup || jsonData.jokes[i].joke;
        jokesButton.id = "buttonAccordion";

        paraAnswer.innerText =
          jsonData.jokes[i].delivery ||
          `Category:${jsonData.jokes[i].category}`;

        jokesButton.addEventListener("click", function () {
          this.classList.toggle("active");
          let containerParaAnswer = this.nextElementSibling;
          if (containerParaAnswer.style.display === "block") {
            containerParaAnswer.style.display = "none";
          } else {
            containerParaAnswer.style.display = "block";
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
