document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            tabPanels.forEach((panel) => panel.classList.add("hidden"));
            tabPanels[index].classList.remove("hidden");

            tabButtons.forEach((btn) =>
                btn.classList.remove("text-blue-500", "border-blue-500")
            );
            button.classList.add("text-blue-500", "border-blue-500");
        });
    });
    6;

    // Inicializar la primera tab como activa
    tabButtons[0].classList.add("text-blue-500", "border-blue-500");
    tabPanels[0].classList.remove("hidden");
});
