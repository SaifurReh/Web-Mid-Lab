document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("submitBtn");
  const container = document.querySelector(".faq-container");

  // Function to toggle the "active" class
  function toggleActiveState(event) {
      const card = event.currentTarget;
      card.classList.toggle("active");
  }

  // Function to remove a card
  function removeCard(event) {
      const crossIcon = event.currentTarget;
      const card = crossIcon.parentElement.parentElement; // Get the parent of the parent
      card.remove();
  }

  // Add a click event listener to each card
  const cards = document.querySelectorAll(".faq");
  cards.forEach((card) => {
      card.addEventListener("click", toggleActiveState);

      // Add a click event listener to the cross icon to remove the card
      const crossIcon = card.querySelector(".fa-times");
      crossIcon.addEventListener("click", removeCard);
  });

  addButton.addEventListener("click", function () {
      const newTitleInput = document.getElementById("faqTitle");
      const newAnswerInput = document.getElementById("faqText");

      const newTitle = newTitleInput.value;
      const newAnswer = newAnswerInput.value;

      if (newTitle && newAnswer) {
          const newCard = document.createElement("div");
          newCard.className = "faq";
          newCard.innerHTML = `
              <h3 class="faq-title">${newTitle}</h3>
              <p class="faq-text">${newAnswer}</p>
              <button class="faq-toggle">
                  <i class="fas fa-chevron-down"></i>
                  <i class="fas fa-times"></i>
              </button>
          `;

          container.insertBefore(newCard, document.querySelector(".new-question"));
          newTitleInput.value = "";
          newAnswerInput.value = "";

          // Add a click event listener to the new card
          newCard.addEventListener("click", toggleActiveState);

          // Add a click event listener to the cross icon to remove the card
          const crossIcon = newCard.querySelector(".fa-times");
          crossIcon.addEventListener("click", removeCard);
      }
  });
});