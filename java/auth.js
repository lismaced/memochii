// Biblioteca de criptografia AES (usa CryptoJS)
const Auth = {
  secretKey: "memochii-secret-key-123!@#", // Chave para criptografar

  encrypt(data) {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  },

  decrypt(encryptedData) {
    return CryptoJS.AES.decrypt(encryptedData, this.secretKey).toString(CryptoJS.enc.Utf8);
  },

  hashPassword(password) {
    return this.encrypt(password);
  }
};