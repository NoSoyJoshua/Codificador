const encryptationCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

export function encrypt (text) {
    for (let i = 0; i < encryptationCode.length; i++) {
        if (text.includes(encryptationCode[i][0])) text = text.replaceAll(encryptationCode[i][0], encryptationCode[i][1]);
    }
    return text;
}

export function decrypt (text) {
    for (let i = encryptationCode.length - 1; i >= 0; i = i - 1) {
        if (text.includes(encryptationCode[i][1])) text = text.replaceAll(encryptationCode[i][1], encryptationCode[i][0]);
    }
    return text;
}