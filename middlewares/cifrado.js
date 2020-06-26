const CryptoJS = require("crypto-js");
var hash = require('object-hash');

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
function hashear(data){
    var hashT=hash.keys(data);
    return hashT;
}

module.exports = {
    cifrar,
    decifrar,
    hashear
}