
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.left === "0px") {
        menu.style.left = "-250px"; // Replacer le menu hors de l'écran
    } else {
        menu.style.left = "0px"; // Afficher le menu
    }
}