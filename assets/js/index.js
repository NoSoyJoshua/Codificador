import { encrypt, decrypt } from "./codificador.js";

const navbar = $("nav");
const navbarButton = $(".navbar-mobile-button");
const navbarButtonLayout = $(".navbar-mobile-button-layout");
const textArea = $(".text-area")[0];
const resultContainer = $(".result-container");
const resultArea = $(".result-area");
const encryptButton = $(".encrypt-button");
const decryptButton = $(".decrypt-button");
const copyButton = $(".copy-button");

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