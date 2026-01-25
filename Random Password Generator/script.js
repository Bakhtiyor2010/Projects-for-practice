const passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allChars = uppercase + lowercase + numbers + symbols;

function createPassword() {
  let password = "";
  
  password += getRandomChar(uppercase);
  password += getRandomChar(lowercase);
  password += getRandomChar(numbers);
  password += getRandomChar(symbols);

  while (password.length < length) {
    password += getRandomChar(allChars);
  }

  passwordBox.value = shuffleString(password);
}

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffleString(str) {
  return [...str].sort(() => Math.random() - 0.5).join("");
}

async function copyPassword() {
  if (passwordBox.value) {
    try {
      await navigator.clipboard.writeText(passwordBox.value);
      alert("✅ Password copied to clipboard!");
    } catch (err) {
      console.error("Clipboard error:", err);
      alert("❌ Failed to copy password.");
    }
  } else {
    alert("⚠️ Please generate a password first.");
  }
}