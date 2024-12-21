const passwordLength = document.getElementById("password-length");
const generateBtn = document.getElementById("generate-btn");
const passwordOutput = document.getElementById("password-output");
const copyBtn = document.getElementById("copy-btn");
const themeToggle = document.getElementById("theme-toggle");

function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}

generateBtn.addEventListener("click", () => {
  const length = parseInt(passwordLength.value, 10);
  if (length >= 4 && length <= 32) {
    passwordOutput.value = generatePassword(length);
  } else {
    alert("O tamanho da senha deve ser entre 4 e 32 caracteres.");
  }
});

copyBtn.addEventListener("click", () => {
  if (passwordOutput.value) {
    passwordOutput.select();
    document.execCommand("copy");
    alert("Senha copiada para a área de transferência!");
  } else {
    alert("Gere uma senha primeiro!");
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});
