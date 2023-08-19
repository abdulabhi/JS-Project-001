
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const clearButton = document.getElementById("clear");
const passwordField = document.getElementById("Display");

const charactors = "abcdefghjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+~";

passwordLength = 12;


function generateRandomPassword(length)
{
  let password = "";
  for (let i=0; i<length; i++)
  {
    const randomIndex = Math.floor(Math.random() * charactors.length);
    password += charactors.charAt(randomIndex);
  }
  return password;
};

generateButton.addEventListener("click", function () {
  const newPassword = generateRandomPassword(passwordLength);
  passwordField.value = newPassword;
});


copyButton.addEventListener("click", function () {
  const textToCopy = passwordField.value;

  navigator.clipboard.writeText(textToCopy)

  .then(() => {
    alert("password copy to clipboard !");
  })
  .catch((error) => {
    console.error("copy failed", error);
  });
});



clearButton.addEventListener("click", function()
{
  passwordField.value = "";
});

const initialPassword = generateRandomPassword(passwordLength);
passwordField = initialPassword;





