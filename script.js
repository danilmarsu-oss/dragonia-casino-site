const formattedDate = new Date().toLocaleDateString("nb-NO");
const updatedDate = document.getElementById("updatedDate");

if (updatedDate) {
  updatedDate.textContent = formattedDate;
}

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
      const panel = item.nextElementSibling;
      if (panel) panel.hidden = true;
    });

    button.setAttribute("aria-expanded", String(!isOpen));
    const answer = button.nextElementSibling;
    if (answer) answer.hidden = isOpen;
  });
});
