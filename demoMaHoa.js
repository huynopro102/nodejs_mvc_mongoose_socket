function vigenereEncrypt(plainText, key) {
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();
  
    let encryptedText = '';
  
    for (let i = 0; i < plainText.length; i++) {
      if (plainText[i] >= 'A' && plainText[i] <= 'Z') {
        const plainCharIndex = plainText.charCodeAt(i) - 'A'.charCodeAt(0);
        const keyCharIndex = key.charCodeAt(i % key.length) - 'A'.charCodeAt(0);
        const encryptedCharIndex = (plainCharIndex + keyCharIndex) % 26;
        encryptedText += String.fromCharCode(encryptedCharIndex + 'A'.charCodeAt(0));
      } else {
        encryptedText += plainText[i];
      }
    }
  
    return encryptedText;
  }
  
  function vigenereDecrypt(encryptedText, key) {
    encryptedText = encryptedText.toUpperCase();
    key = key.toUpperCase();
  
    let decryptedText = '';
  
    for (let i = 0; i < encryptedText.length; i++) {
      if (encryptedText[i] >= 'A' && encryptedText[i] <= 'Z') {
        const encryptedCharIndex = encryptedText.charCodeAt(i) - 'A'.charCodeAt(0);
        const keyCharIndex = key.charCodeAt(i % key.length) - 'A'.charCodeAt(0);
        const decryptedCharIndex = (encryptedCharIndex - keyCharIndex + 26) % 26;
        decryptedText += String.fromCharCode(decryptedCharIndex + 'A'.charCodeAt(0));
      } else {
        decryptedText += encryptedText[i];
      }
    }
  
    return decryptedText;
  }
  
module.exports = {
    vigenereDecrypt , 
    vigenereEncrypt
}
  // Ví dụ sử dụng
  const plainText = "HELLO";
  const key = "KEY";
  
  const encryptedText = vigenereEncrypt(plainText, key);
  console.log("Encrypted Text:", encryptedText);
  
  const decryptedText = vigenereDecrypt(encryptedText, key);
  console.log("Decrypted Text:", decryptedText);
  