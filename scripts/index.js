"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("searchbox");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("search");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("searchengine");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
  } catch (err) {
    alert(err.toString());
    throw err;
  }
  const url = search(address.value, searchEngine.value);
      
            window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
