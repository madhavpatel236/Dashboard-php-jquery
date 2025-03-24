$(document).ready(function () {
  function validateFirstname() {
    firstname = $("#firstname").val().trim();
    if (firstname === "") {
      $("#firstname_error").text("please enter your first name.");
      return false;
    } else {
      $("#firstname_error").text(" ");
      return true;
    }
  }

  function validateLastname() {
    lastname = $("#lastname").val().trim();
    if (lastname === "") {
      $("#lastname_error").text(" Please enter your lastname.");
      return false;
    } else {
      $("$lastname_error").text(" ");
      return true;
    }
  }

  function validateEmail() {
    email = $("#email").val().trim();
    if (email === "") {
      $("#email_error").text("Enter your email address");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("#email_error").text("*Please enter a valid email address.");
      $("#email").css({ "border-color": "red" });
      return false;
    } else {
      $("#email_error").text(" ");
      return true;
    }
  }
  function validatePassword() {
    password = $("#password").val().trim();
    if (password === "") {
      $("#password_error").text(" Please enter your passsword.");
      return false;
    } else {
      $("#password_error").text(" ");
      return true;
    }
  }

  $("#firstname").on("input", validateFirstname);
  $("#lastname").on("input", validateLastname);
  $("#email").on("input", validateEmail);
  $("#password").on("input", validatePassword);

  $("#addUserForm").submit(function (e) {
    let isValid =
      validateFirstname() &&
      validateLastname() &&
      validateEmail() &&
      validatePassword();

    if (!isValid) {
      e.preventDefault();
    }
  });
});
