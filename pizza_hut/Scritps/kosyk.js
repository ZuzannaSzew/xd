document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
  
    const cartCountElement = document.getElementById("cart-count");
    const cartMessages = document.querySelectorAll(".cart-message"); 
    const buyButtons = document.querySelectorAll(".buy-button"); 
  
    buyButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount; 

        const messageElement = cartMessages[index];
        messageElement.textContent = "Produkt został dodany do koszyka!";
        messageElement.style.color = "green";
  
        setTimeout(() => {
          messageElement.textContent = "";
        }, 3000);
      });
    });
  });
  