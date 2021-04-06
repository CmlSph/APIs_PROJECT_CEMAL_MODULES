const apiURL = "https://v2.jokeapi.dev/joke/";

import { getSelectedCheckboxValues } from "../utils/selectedCheckboxes.js";
import { addSearchQuery } from "../utils/searchQueryAmountAndLanguage.js";
import { selectAmount } from "../utils/searchQueryAmountAndLanguage.js";
import { selectLanguage } from "../utils/searchQueryAmountAndLanguage.js";

export function generateURL() {
  const selectedCategories = getSelectedCheckboxValues("category").toString();
  const selectedBlacklists = getSelectedCheckboxValues("blacklist").toString();
  const selectedType = getSelectedCheckboxValues("parts").toString();

  const selectedTypeURLElement = `&type=${selectedType}&`;
  const blacklistURLElement = `&blacklistFlags=${selectedBlacklists}`;
  const newQuery = addSearchQuery();
  const amountOfJokes = selectAmount();
  const selectedLanguage = selectLanguage();

  let url =
    apiURL +
    selectedCategories +
    selectedLanguage +
    blacklistURLElement +
    selectedTypeURLElement +
    newQuery +
    amountOfJokes;

  return url;
}
