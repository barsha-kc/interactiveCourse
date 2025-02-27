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

//localization

const languageSelect = document.querySelector("#language-select");


async function loadlanguage(lang) {
    const response = await fetch("lang.json");
    const data = await response.json();

    //header

    document.querySelector("header h1").innerText = data[lang].title;


    document.getElementById("nav-home").innerText = data[lang].home;
    document.getElementById("nav-products").innerText = data[lang].products;
    document.getElementById("nav-about").innerText = data[lang].about;
    document.getElementById("theme-toggle").innerText = data[lang].themeToggle;
    document.querySelector("footer p").innerText = data[lang].footerText;



    if (document.body.classList.contains("home-page")) {
        document.querySelector(".hero h2").innerText = data[lang].welcomeMessage;
        document.querySelector(".hero p").innerText = data[lang].description;
        document.querySelector(".hero .btn").innerText = data[lang].shopNow;
    }

    if (document.body.classList.contains("products-page")) {
        document.querySelector(".filters").innerText = data[lang].products;
        document.querySelector(".card button").innerText = data[lang].addToCart;
        


document.querySelectorAll("[data-key='addToCart']").forEach(button => {
    button.innerText = data[lang].addToCart;
});


    }
       

    if (document.body.classList.contains("about-page")) {
        document.querySelector(".about h2").innerText = data[lang].aboutUsTitle;
        document.querySelector(".about p").innerText = data[lang].aboutUsText;
    }




    localStorage.setItem("selectedLanguage", lang);

}



languageSelect.addEventListener("change", () => {
    loadlanguage(languageSelect.value);
});



document.addEventListener("DOMContentLoaded", () => {
        let savedLang = localStorage.getItem("selectedLanguage") || "en";
        languageSelect.value = savedLang;
        loadlanguage(savedLang); 
    });
    
    
    
    
    
