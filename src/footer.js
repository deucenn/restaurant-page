function renderFooter() {
  const content = document.getElementById("content");

  const footer = document.createElement("div");
  footer.classList.add("footer");
  content.appendChild(footer);

  const copyright = document.createElement("p");
  copyright.textContent = "© 2024 Raphael Bienholz";
  footer.appendChild(copyright);
}

export { renderFooter };
