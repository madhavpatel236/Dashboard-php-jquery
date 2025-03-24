$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    let email = $("#email").val();
    let password = $("#password").val();

    isValid = true;

    if (email.trim() == "") {
      $("#email_error").text("Please enter a email.");
      $("#email").css({ "border-color": "red" });
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("#email_error").text("Please enter a valid email address");
      $("#email").css({ "border-color": "red" });

      isValid = false;
    }
    if (password.trim() == "") {
      isValid = false;
      $("#password").css({ "border-color": "red" });
      $("#password_error").text(" Please enter a password.");
    }

    if (!isValid) {
      e.preventDefault();
    }
  });
});
