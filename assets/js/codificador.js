const encryptationCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

export function encrypt (text) {
    let result = text.toLowerCase();
    for (let i = 0; i < encryptationCode.length; i++) {
        if (result.includes(encryptationCode[i][0])) result = result.replaceAll(encryptationCode[i][0], encryptationCode[i][1]);
    }
    return result;
}

export function decrypt (text) {
    let result = text.toLowerCase();
    for (let i = encryptationCode.length - 1; i >= 0; i = i - 1) {
        if (result.includes(encryptationCode[i][1])) result = result.replaceAll(encryptationCode[i][1], encryptationCode[i][0]);
    }
    return result;
}