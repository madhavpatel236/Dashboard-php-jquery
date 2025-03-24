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

// $(document).ready(function () {
//   $("#loginForm").submit(function (e) {
//     let email = $("#email").val();
//     let password = $("#password").val();

//     isValid = true;

//     if (email.trim() == "") {
//       $("#email_error").text("Please enter a email.");
//       $("#email").css({ "border-color": "red" });
//       isValid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       isValid = false;
//       $("#email_error").text("Please enter a valid email address");
//       $("#email").css({ "border-color": "red" });
//     } else {
//       $("#email_error").text("");
//       $("#email").css({"border-color": ""})
//     }
//     if (password.trim() == "") {
//       isValid = false;
//       $("#password").css({ "border-color": "red" });
//       $("#password_error").text(" Please enter a password.");
//     }

//     if (!isValid) {
//       e.preventDefault();
//     }
//   });
// });
