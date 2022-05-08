const encryptationCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

export function encrypt (text) {
    let result = "";
    for (let i = 0; i < encryptationCode.length; i++) {
        if (text.includes(encryptationCode[i][0])) result = text.replaceAll(encryptationCode[i][0], encryptationCode[i][1]);
    }
    return result;
}

export function decrypt (text) {
    let result = "";
    for (let i = 0; i < encryptationCode.length; i++) {
        if (text.includes(encryptationCode[i][1])) result = text.replaceAll(encryptationCode[i][1], encryptationCode[i][0]);
    }
    return result;
}