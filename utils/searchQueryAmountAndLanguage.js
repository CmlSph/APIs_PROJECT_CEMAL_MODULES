export function addSearchQuery() {
  const queryInput = document.getElementById("query");
  const searchQuery = queryInput.value ? `contains=${queryInput.value}&` : "";
  return searchQuery;
}

export function selectAmount() {
  const amountInput = document.getElementById("amount");
  const amountOfJokes = `amount=${amountInput.value}`;
  return amountOfJokes;
}

export function selectLanguage() {
  const languageInput = document.getElementById("language");
  const selectedLanguage = languageInput.value
    ? `?lang=${languageInput.value}`
    : `?lang=en`;
  return selectedLanguage;
}
