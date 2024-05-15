document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const addToCartButton = document.getElementById("addToCartButton");
  const cartItems = document.getElementById("cartItems");

  // Change main image when thumbnail is clicked
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (event) => {
      mainImage.src = event.target.src.replace("-thumbnail", "");
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      event.target.classList.add("active");
    });
  });

  // Add item to cart
  addToCartButton.addEventListener("click", () => {
    const cartItem = document.createElement("li");
    cartItem.textContent = "Fall Limited Edition Sneakers - $125.00";
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-item");
    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);

    // Remove item from cart
    removeButton.addEventListener("click", () => {
      cartItem.remove();
    });
  });
});
