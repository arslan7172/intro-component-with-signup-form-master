const form = document.getElementById('form');
const username = document.getElementById('First');
const lastname = document.getElementById('Last');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// The trim() method removes whitespace from both sides of a string.
    //The trim() method does not change the original string.
	const usernameValue = username.value.trim();
    const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'First Name cannot be blank');
	} else {
		setSuccessFor(username);
	}

    if(lastnameValue === '') {
		setErrorFor(lastname, 'Last Name cannot be blank');
	} else{
		setSuccessFor(lastname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



/* function ValidateEmail() {
    var x = document.getElementById('input_id').value
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || x==='') {
        document.getElementById("validation").innerHTML = "Please provide a valid email address";
        document.getElementById("myBtn").disabled = true;      
    }
    else{
        document.getElementById("validation").innerHTML = "";
        document.getElementById("myBtn").disabled = false;  
    }
} */