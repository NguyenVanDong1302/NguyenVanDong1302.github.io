const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");

minusBtn.addEventListener("click", () => {
  if (quantityInput.value > 1) {
    quantityInput.value--;
  }
});

plusBtn.addEventListener("click", () => {
  quantityInput.value++;
});
