<form id="myForm">
    <label>First Name</label>
    <input type="text" name="firstName">
    
    <label>Last Name</label>
    <input type="text" name="lastName">

    <label>Email</label>
    <input type="email" name="email">

    <button type="submit">Submit</button>
</form>

<div id="errorContainer"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js"></script>
<script>
$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            firstName: "First and Last Name are required",
            lastName: "First and Last Name are required",
            email: "Please enter a valid email"
        },
        groups: {
            fullName: "firstName lastName"  // Grouping firstName and lastName
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") === "firstName" || element.attr("name") === "lastName") {
                error.appendTo("#errorContainer");
            } else {
                error.insertAfter(element);
            }
        }
    });
});
</script>
