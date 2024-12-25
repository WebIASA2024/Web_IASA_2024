document.addEventListener("DOMContentLoaded", function () {
    // Функція для відкриття модального вікна
    function openModal(content) {
        // Додати модальне вікно в DOM
        const modalBackdrop = document.createElement("div");
        modalBackdrop.classList.add("learn-more-modal-backdrop");

        const modal = document.createElement("div");
        modal.classList.add("learn-more-modal");
        modal.innerHTML = `
            <div>
                ${content}
            </div>
            <button class="learn-more-clbutton">Закрити</button>
        `;

        document.body.appendChild(modalBackdrop);
        document.body.appendChild(modal);

        modalBackdrop.style.display = "block";
        modal.style.display = "block";

        // Додаємо обробник для закриття модального вікна
        function closeModal() {
            modalBackdrop.remove();
            modal.remove();
        }

        modal.querySelector(".learn-more-clbutton").addEventListener("click", closeModal);
        modalBackdrop.addEventListener("click", closeModal);
    }

    // Знаходимо всі кнопки "Дізнатись більше..."
    const learnMoreButtons = document.querySelectorAll(".services-learn-more");

    learnMoreButtons.forEach((button, index) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const serviceDescription = `Опис послуги для блоку #${index + 1}. Тут можна додати більше тексту або деталей.`;
            openModal(serviceDescription);
        });
    });
});
