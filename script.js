

const form = document.querySelector('input[type="email"]').closest("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#form1Example13").value;
  const password = document.querySelector("#form1Example23").value;

  const correctEmail = "your@email.com";
  const correctPassword = "login123"; 

  console.log("Email:", email);
  console.log("Password:", password);

  if (email === correctEmail && password === correctPassword) {
    window.location.href = "./profile.html";
  } else {
    console.log("Login failed. Please check your credentials.");
  }
});

  