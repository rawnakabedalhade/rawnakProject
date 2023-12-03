import { getCountries } from "./countries.service.js";
import { createCardList } from "./dom.service.js";

console.log(await getCountries());
createCardList();