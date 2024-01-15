// Load Navbar in pages
fetch("/dsai/assets/templates/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("page-header").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching navbar:", error));
