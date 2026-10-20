// --- 1) Mobil menüyü aç/kapa ---
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  // Ekran okuyucular menünün durumunu buradan öğrenir
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// --- 2) Form doğrulama ---
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status");

// Her alan için kural ve hata mesajı
const rules = [
  { id: "name", validate: (value) => value.trim().length >= 2, errorText: "Lütfen adını yaz (en az 2 harf)." },
  { id: "email", validate: (value) => /^\S+@\S+\.\S+$/.test(value), errorText: "Geçerli bir e-posta yaz, örneğin ad@ornek.com." },
  { id: "message", validate: (value) => value.trim().length >= 10, errorText: "Mesajın en az 10 karakter olmalı." },
];

function validateField(rule) {
  const field = document.getElementById(rule.id);
  const errorElement = document.getElementById(rule.id + "-error");
  const isValid = rule.validate(field.value);

  errorElement.textContent = isValid ? "" : rule.errorText;
  field.setAttribute("aria-invalid", String(!isValid));
  return isValid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // sayfa yenilenmesin
  statusMessage.textContent = "";

  let firstInvalidField = null;
  rules.forEach((rule) => {
    if (!validateField(rule) && !firstInvalidField) {
      firstInvalidField = document.getElementById(rule.id);
    }
  });

  if (firstInvalidField) {
    firstInvalidField.focus(); // klavye kullanıcısını ilk hataya götür
    return;
  }

  // Burada gerçek bir sunucuya gönderme yok, sadece örnek
  statusMessage.textContent = "Teşekkürler, mesajın alındı.";
  form.reset();
});