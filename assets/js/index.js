import { encrypt, decrypt } from "./codificador.js";

const navbar = $("nav");
const navbarButton = $(".navbar-mobile-button");
const textArea = $(".text-area");
const resultContainer = $(".result-container");
const resultArea = $(".result-area");
const encryptButton = $(".encrypt-button");
const decryptButton = $(".decrypt-button");
const copyButton = $(".copy-button");

navbarButton.click(function () {
    navbar.toggleClass("nav-unhide");
    navbarButton.toggleClass("navbar-button-unhide");
})

encryptButton.click(function () {
    resultContainer.addClass("result-container-filled");
    copyButton.removeClass("hidden");
    resultArea.removeClass("hidden");
    textArea.value = console.log("Hola");
})

decryptButton.click(function () {
    resultContainer.addClass("result-container-filled");
    copyButton.removeClass("hidden");
    resultArea.removeClass("hidden");
    resultArea.innerText = decrypt(textArea.value);
})

console.log(encrypt("holi "))
console.log(decrypt("hoberlimes "));