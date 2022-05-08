import { encrypt, decrypt } from "./codificador.js";

const navbar = $("nav");
const navbarButton = $(".navbar-mobile-button");
const textArea = $(".text-area");
const resultContainer = $(".result-container");
const resultArea = $(".result-area");
const encryptButton = $(".encrypt-button");
const decryptButton = $(".decrypt-button");

navbarButton.click(function () {
    navbar.toggleClass("nav-unhide");
    navbarButton.toggleClass("navbar-button-unhide");
})

encryptButton.click(function () {
    resultContainer.addClass("result-container-filled");
    resultArea.innerText = encrypt(textArea.value);
})

decryptButton.click(function () {
    resultContainer.addClass("result-container-filled");
    resultArea.innerText = decrypt(textArea.value);
})

console.log(encrypt("holi "))
console.log(decrypt("hoberlimes "));