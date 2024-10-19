import "./styles.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAbout } from "./about";
import { renderFooter } from "./footer";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const content = document.getElementById("content");

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  renderHome();
  renderFooter();
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  renderMenu();
  renderFooter();
});

aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  renderAbout();
  renderFooter();
});

renderHome();
renderFooter();
