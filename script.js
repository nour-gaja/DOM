
// Handle the heart icon click
const hearts = document.querySelectorAll(".fa-heart");
hearts.forEach((heart) => {
  heart.onclick = () => {
    if (heart.style.color === "red") {
        heart.style.color = "black";
      } else {
        heart.style.color = "red";
      };
  };
});

// Select elements
const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const quantities = document.querySelectorAll(".quantity");
const unitPrices = document.querySelectorAll(".unit-price");
const totalPriceElement = document.querySelector(".total");

// Function to update the total price
function updateTotalPrice() {
    const quantities = document.querySelectorAll(".quantity"); 
    const unitPrices = document.querySelectorAll(".unit-price"); 
  
    let total = 0; // Initialize total price to 0
    quantities.forEach((quantity, index) => {
      const unitPrice = parseFloat(unitPrices[index].textContent); 
      total += parseInt(quantity.textContent) * unitPrice; 
    
    });
    
    totalPriceElement.textContent = `${total} $`;  // Update the total price in the DOM
  }
  
  // Increment quantity
  document.querySelectorAll(".fa-plus-circle").forEach((button, index) => {
    button.onclick = () => {
      const quantity = button.closest(".card-body").querySelector(".quantity");
      quantity.textContent = parseInt(quantity.textContent) + 1; 
      updateTotalPrice(); 
    };
  });
  
  // Decrement quantity
  document.querySelectorAll(".fa-minus-circle").forEach((button, index) => {
    button.onclick = () => {
      const quantity = button.closest(".card-body").querySelector(".quantity");
      if (parseInt(quantity.textContent) > 0) {
        quantity.textContent = parseInt(quantity.textContent) - 1; 
        updateTotalPrice(); 
      }
    };
  });

  // Delete product
  const deleteButtons = document.querySelectorAll(".fa-trash-alt"); // Select element
  document.querySelectorAll(".fa-trash-alt").forEach((button) => {
    button.onclick = () => {
      const productCard = button.closest(".card"); 
      // Remove the product card from the DOM
      productCard.remove();
     // Update the total price after removal 
      updateTotalPrice(); 
    };
  });

