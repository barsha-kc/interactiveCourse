const themeBtn = document.querySelector("#theme-toggle");
const modeLight = document.querySelector("#mode-light");
const modeDark = document.querySelector("#mode-dark");

const body = document.body;
if (localStorage.getItem("currentTheme") === "dark") {
    body.classList.add("dark-mode");
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
}
else {
    modeDark.style.display = "none";
    modeLight.style.display = "inline";
}


themeBtn.addEventListener("click", () => {
    console.log("Button is being clicked")
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        //Show light icon and switch background colors
        modeDark.style.display = "none";
        modeLight.style.display = "inline";
        localStorage.setItem("currentTheme", "dark");
    }
    else {
        modeLight.style.display = "none";
        modeDark.style.display = "inline";
        //Show dark icon and switch background colors
        localStorage.setItem("currentTheme", "light");
    }

})