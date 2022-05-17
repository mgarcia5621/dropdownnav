function hamburger() {
    let navigation = document.getElementById("nav-links")
    if (navigation.style.display === "none"); {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "block";
    }
}