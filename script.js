function encryptText() {
    var inputText = document.getElementById("input-text").value;
    var key = "hs";

    var encrypted = CryptoJS.AES.encrypt(inputText, key).toString();
    document.getElementById("output-text").value = encrypted;
}
