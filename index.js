document.addEventListener("DOMContentLoaded", () => {
    const catalogButton = document.getElementById("catalog-button");
    const dropdown = document.getElementById("dropdown");

    catalogButton.addEventListener("click", () => {
        const isVisible = dropdown.style.display === "block";
        dropdown.style.display = isVisible ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target) && event.target !== catalogButton) {
            dropdown.style.display = "none";
        }
    });
});