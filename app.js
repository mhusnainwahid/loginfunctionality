function onSubmit (){
    var user_email = document.getElementById("email").value
    var user_pass = document.getElementById("password").value
    console.log(user_email,user_pass)

    if(!user_email || !user_pass){
        alert("Required fields are mising")
        return
    }

    if(user_email === "mhusnain@gmail.com" && user_pass === "123123"){
        alert("Succesfully Login")
        window.location.href = './E-commerce./home.html'
    }else{
        alert("Wrong password or email")
    }
}