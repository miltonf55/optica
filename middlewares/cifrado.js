const CryptoJS = require("crypto-js");

function cifrar(txt) {
    var ciphertext = CryptoJS.Rabbit.encrypt(txt, process.env.KEY);
    ciphertext=ciphertext.toString();
    return ciphertext;
}

function decifrar(ciphertext) {
    var bytes = CryptoJS.Rabbit.decrypt(ciphertext, process.env.KEY);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
}

module.exports = {
    cifrar,
    decifrar,
    hashear
}