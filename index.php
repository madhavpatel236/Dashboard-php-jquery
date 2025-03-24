<?php
require('./constants.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="./assets/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>   
    <script defer src="./assets/auth.js"></script>
</head>


<body>
    <div id="loginForm" name="loginForm" class="form-container">
        <h2 class="form-title">Login</h2>

        <form action="./controller/authController.php" method="post">
            <label class="lable" for="email">Email:</label>
            <input class="input" id="email" name="email" type="email" />
            <span class="error" id="email_error"></span>

            <label class="lable" for="password">Password:</label>
            <input class="input" id="password" name="password" type="password" />
            <span class="error" id="password_error"></span>

            <button class="btn-submit" name="submit">Submit</button>
        </form>
    </div>
</body>

</html>