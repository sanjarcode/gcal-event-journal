const theme_switch = document.querySelector("#theme_switch");
const themeCSS = document.querySelector("#theme_css");
console.log(themeCSS.textContent);
let theme = "light";
theme_switch.addEventListener("click", () => {
  if (theme === "light") {
    themeCSS.setAttribute("href", "styles/dark_theme.css");
    theme_switch.textContent = "Light Mode";
    theme = "dark";
  } else {
    themeCSS.setAttribute("href", "styles/light_theme.css");
    theme_switch.textContent = "Dark Mode";
    theme = "light";
  }
});
