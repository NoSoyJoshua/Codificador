import { encrypt, decrypt } from "./codificador.js";

// HTML Elements
const navbar = $("nav");
const navbarButton = $(".navbar-mobile-button");
const navbarButtonLayout = $(".navbar-mobile-button-layout");
const textArea = $(".text-area")[0];
const resultContainer = $(".result-container");
const resultArea = $(".result-area");
const encryptButton = $(".encrypt-button");
const decryptButton = $(".decrypt-button");
const copyButton = $(".copy-button");
const darkmodeButton = $('#checkbox');

// Color variables
const varModes = ["--brightest-color", "--second-brightest-color", "--darkest-color", "--second-darkest-color", "--inbetween-color", "--bright-letter-color", "--dark-letter-color"]
const modes = [["#FFFFFF", "#D9D9D9", "#353535", "#284B63", "#3C6E71", "#FFFFFF", "#353535"], ["#353535", "#284B63", "#3C6E71", "#D9D9D9", "#FFFFFF", "#353535", "#FFFFFF"]]

// Other useful variables
let mode = 0;

navbarButton.click(function () {
    navbar.toggleClass("nav-unhide");
    navbarButton.toggleClass("navbar-button-unhide");
    navbarButtonLayout.toggleClass("hidden");
});

encryptButton.click(function () {
    resultContainer.addClass("result-container-filled");
    copyButton.removeClass("hidden");
    resultArea.removeClass("hidden");
    resultArea[0].innerText = encrypt(textArea.value);
});

decryptButton.click(function () {
    resultContainer.addClass("result-container-filled");
    copyButton.removeClass("hidden");
    resultArea.removeClass("hidden");
    resultArea[0].innerText = decrypt(textArea.value);
});

copyButton.click(function () {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(resultArea[0].innerText); 
    alert("¡Mensaje copiado!");    
});

darkmodeButton.click( () => {
    mode = (mode + 1) % 2;

    for (let i = 0; i < varModes.length; i++) {
        document.documentElement.style.setProperty(varModes[i], modes[mode][i]);
    }
})

$(window).on("orientationchange",function(){
    navbar.removeClass("nav-unhide");
    navbarButton.removeClass("navbar-button-unhide");
    if (!(navbarButtonLayout.hasClass("hidden"))) navbarButtonLayout.addClass("hidden");
});