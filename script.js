
function validateForm() {
    // Get input values
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var terms = document.forms["myForm"]["terms"].checked;
    
    // Check if first and last name are not empty
    if (firstName == "" || lastName == "") {
        document.getElementById("nameError").innerHTML = "Name cannot be empty";
        return false;
    }
    
    // Check if phone number is valid
    if (!phone.match(/^\d{10}$/)) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid phone number";
        return false;
    }
    
    // Check if email is valid
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
        return false;
    }
    
    // Check if password is valid
    if (!password.match(/^(?=.\d)(?=.[A-Z])[0-9a-zA-Z]{8,}$/)) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long and contain at least one numeric value and one uppercase letter";
        return false;
    }
    
    // Check if terms checkbox is checked
    if (!terms) {
        document.getElementById("termsError").innerHTML = "You must agree to the terms and conditions";
        return false;
    }
    
    // Log form values to console and show success message
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    console.log("Password: " + password);
    alert("Form submitted successfully");
    return true;
}


