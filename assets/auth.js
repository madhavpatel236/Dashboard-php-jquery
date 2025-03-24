$(document).ready(function () {
  function validateEmail() {
    let email = $("#email").val().trim();
    if (email === "") {
      $("#email_error").text("Please enter an email.");
      $("#email").css("border-color", "red");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("#email_error").text("Please enter a valid email address.");
      $("#email").css("border-color", "red");
      return false;
    } else {
      $("#email_error").text("");
      $("#email").css("border-color", "");
      return true;
    }
  }

  function validatePassword() {
    let password = $("#password").val().trim();
    if (password === "") {
      $("#password_error").text("Please enter a password.");
      $("#password").css("border-color", "red");
      return false;
    } else {
      $("#password_error").text("");
      $("#password").css("border-color", "");
      return true;
    }
  }

  $("#email").on("input", validateEmail);
  $("#password").on("input", validatePassword);

  $("#loginForm").submit(function (e) {
    let isValid = validateEmail() && validatePassword();
    if (!isValid) {
      e.preventDefault();
    }
  });
});

// ---------------------------------------

// validation with the jquery validator

$("#loginForm").validate({
  rules: {
    firstname: {
      required: true,
    },
    lastname: {
      required: true,
    },
    email: {
      required: password,
      email: true,
    },
    password: {
      required: true,
      minlength: 6,
    },
  },
  message: {
    firstname: "please enter your firstname.",
    lastname: "please enter your lastname",
    email: {
      required: " Please enter your last email address. ",
      email: "please enter a valid email address",
    },
  },
});
