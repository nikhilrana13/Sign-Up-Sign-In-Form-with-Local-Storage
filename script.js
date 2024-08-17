const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());




//  sign up js//


function signup(){
    let username = document.getElementById("user").value
    let useremail = document.getElementById("email").value
    let userpassword= document.getElementById("password").value
    let message = document.getElementById("message")
    let form1box = document.getElementById("form1")



    if(username && userpassword && useremail){
        let user = {
            username: username,
            useremail: useremail,
            userpassword: userpassword,
        }


          localStorage.setItem(useremail, JSON.stringify(user));
          message.textContent = "User created successfully";
          form1box.reset();
    } else{
        message.textContent = "All fields are required";
    }

}


function signin(){
    let email = document.getElementById("signinemail").value
    let password = document.getElementById("siginpassword").value
    let loginmessage = document.getElementById("loginmessage")
    let form2box = document.getElementById("form2");

    let storeduser = localStorage.getItem(email);
    console.log("storeduser:", storeduser)

    if(storeduser){
        let user = JSON.parse(storeduser);
        console.log("userdata:",user)

        if(user.userpassword === password){
            loginmessage.textContent = "Login successful";
        } else{
            loginmessage.textContent = "Wrong password or email";

        }
        } else{
            loginmessage.textContent = "user not found";
        }

        form2box.reset()
    }


