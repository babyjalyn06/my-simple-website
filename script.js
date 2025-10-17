// Add footer directly without fetch
document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <footer>
        <p>© 2025 My Simple Website</p>
        <p>Contact: <a href="tel:0501016156">0501016156</a></p>
      </footer>
    `;
  }
   fetch("nav.html")
            .then(response => response.text())
            .then(data => document.getElementById("nav-placeholder").innerHTML = data);
});
