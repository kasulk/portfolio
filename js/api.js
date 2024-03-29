import { fixFetchedData, getNextRandomCategory } from "./apiUtils.js";

// const url = "https://api.chucknorris.io/jokes/random";
const url = "https://api.chucknorris.io/jokes/random?category=";
let category = getNextRandomCategory();

const quoteElement = document.querySelector("#quote q");
const citeElement = document.querySelector("#quote cite");
let savedScrollPosition = 0;

export function fetchAndRender() {
  quoteElement.classList.add("fade");
  citeElement.classList.add("fade");

  // give the fade a second (and a half) to do its magic
  setTimeout(() => {
    //? savedScrollPosition = window.scrollY;

    fetch(url + category)
      .then((response) => response.json())
      .then((data) => {
        quoteElement.innerHTML = fixFetchedData(data);
        // go back to previously saved scroll position
        //? window.scrollTo(0, savedScrollPosition);
        quoteElement.classList.remove("fade");
        category = getNextRandomCategory();
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  }, 1500);
}

// const demoResponse = {
//   categories: [],
//   created_at: "2020-01-05 13:42:24.142371",
//   icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
//   id: "Wv3UecrjSliPlLacFER2MA",
//   updated_at: "2020-01-05 13:42:24.142371",
//   url: "https://api.chucknorris.io/jokes/Wv3UecrjSliPlLacFER2MA",
//   value:
//     "Chuck Norris can climb Mount Everest with his eyes closed and his arms tied behind his back. He does that every morning to worm-up.",
// };
