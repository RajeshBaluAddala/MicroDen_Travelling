
/* Login form JS code start*/
let user=document.getElementById("user");
let loginBtn=document.getElementById("loginBtn");
let loginPage = document.querySelector(".loginPage");

user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})

// Close login page on document click (except login page)
document.addEventListener("click", function (event) {
    if (!loginPage.contains(event.target) && !user.contains(event.target)) {
        loginPage.classList.remove("active1");
    }
});


loginBtn.addEventListener("click", function(){

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if((email.value == "") && (password.value == ""))
    {
        alert("Please Provide Proper credentials")
    }
    else{
        alert("Your Login completed succesfully...")
        document.querySelector(".loginPage").style.display="none"
    }
})
/* Login form JS code end*/


/* Booking form JS code start*/
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    if(placeName.value == ""){
        alert("Fill Form")
    }
    else{
        alert(placeName.value + " Tour Booked")
    }
})
/* Booking form JS code End*/

