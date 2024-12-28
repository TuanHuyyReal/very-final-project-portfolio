var html = document.querySelector("html");
var theme = document.querySelector("#theme");

theme.addEventListener("click", () => {
  if (html.getAttribute("data-theme") == "dark") {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }
  return 0;
});
// random
