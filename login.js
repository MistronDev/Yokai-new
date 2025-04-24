function togglePassword(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  icon.classList = isPassword ? "fas fa-eye-slash" : "fas fa-eye";
}
