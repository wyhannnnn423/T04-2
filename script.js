document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const logo = document.getElementById("power-logo");

  // Highlight the link matching current URL filename
  const currentPath = window.location.pathname;
  navItems.forEach((link) => {
    const targetFile = link.getAttribute("data-page");
    if (
      currentPath.endsWith(targetFile) ||
      ((currentPath.endsWith("/") || currentPath.endsWith("index")) && targetFile === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // Intercept default behavior to satisfy JavaScript page swapping requirement
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = targetFile;
    });
  });

  // Power Icon click returns user to index.html
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "index.html";
    });
  }
});