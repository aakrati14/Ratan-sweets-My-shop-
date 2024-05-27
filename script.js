// This is just a placeholder JavaScript code since the website is static

// Example: Adding a click event listener to the "Add to Cart" buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  // Prevent the default behavior of the button (e.g., form submission or link navigation)
  event.preventDefault();

  // Get the product details (for example, you can find them by traversing the DOM)
  const productCard = event.target.closest(".product-card");
  const productName = productCard.querySelector("h3").innerText;
  const productPrice = productCard.querySelector(".price").innerText;

  // Add the product to the cart (this is just a placeholder action)
  // You might want to implement a more sophisticated cart functionality
  alert(`Added "${productName}" to the cart. Price: ${productPrice}`);
}
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("link-about")
    .addEventListener("click", function (event) {
      event.preventDefault();
      var aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});
