document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Зчитування даних з форми
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
        // Створення нового елемента відгуку
        const reviewItem = document.createElement("li");
        reviewItem.className = "review-item";

        reviewItem.innerHTML = `
            <h3>${name}</h3>
            <p>${message}</p>
        `;

        // Додавання відгуку до списку
        document.getElementById("reviewsList").appendChild(reviewItem);

        // Очищення форми
        document.getElementById("reviewForm").reset();
    }
});
