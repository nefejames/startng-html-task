function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.length < 4) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6 || !email.includes(".")) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 20) {
        text = "Please Enter More Than 20 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}




// function validateForm(e) {
//     let submitButton = document.querySelector("input[type='submit']");
//     let name = document.querySelector("input[type='text']").value;
//     let email = document.querySelector("input[type='text']");
//     let subject = document.querySelector(".subject").value;
//     let message = document.querySelector("textarea").value;
//     let form = document.querySelector("form");
//     e.preventDefault();

//     if (name.length < 4) {
//         alert("Name is too short");
//         return false;
//     }


//     if (subject.length < 4) {
//         alert("subject is to short")
//     }

//     if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length < 6) {
//         alert("Enter valid email address")
//     }

//     if (message.length < 20) {
//         alert("Message is too short")
//     }


//     submitButton.preventDefault(); // works like this



//     // validation for username
//     if (nameInput.value == null || nameInput.value == "") {
//         alert("Name cant be blank");
//         nameInput.classList.add("inputError");
//     } else if (nameInput.value.length < 4) {
//         alert("Name is too short");
//         nameInput.value = "";
//         nameInput.focus();
//         return false;
//     }

//     if (emailInput.vale == '' || !re.test(emailInput.value)) {
//         alert('Please enter a valid email address.');
//         return false;
//     }

//     // validation for textarea
//     if (message.value.length < 20) {
//         alert("Message is too short. Add more content");
//         message.value = "";
//         message.focus();
//         return false;
//     }
