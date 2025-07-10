window,addEventListener("DOMContentLoaded",()=>{


    const nameInput = document.getElementById("name");
    const passwordInput = document.getElementById("password");
    const repeatInput = document.getElementById("repeat");
    const emailInput = document.getElementById("email");

document.getElementById("register").addEventListener("click",()=>{

    UpdateInteractionCount();

    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const repeat = repeatInput.value.trim();
    const email = emailInput.value.trim();



    if(!name || !password || !repeat || !email ){
        console.error("The values are empty");
        alert("The values are empty");
        return
    } else if(password !== repeat) {
        console.error("password does not match");
        alert("password does not match")
        return
    }


    if(isNaN(name) && password === repeat ){
        localStorage.setItem('userName',name);
        localStorage.setItem('password',password);
        localStorage.setItem('email',email)
        
        alert("records saved successfully ")
        passwordInput.value = "";
        repeatInput.value = "";
        
    } else if(!isNaN(name)) {
        console.error("Enter a name valid, please");
        alert("Enter a name valid, please")
        return
    }

    

});


function showData(){
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('email')

    UpdateInteractionCount();

    if(name && email){
        nameInput.value = name;
        emailInput.value = email;
    } else {
        alert("Not data stored")
        console.log("Not data stored");
        return
    }

};


if(!sessionStorage.getItem('interactionCount')){
    sessionStorage.setItem('interactionCount',0);
}


function UpdateInteractionCount(){
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count ++;
    sessionStorage.setItem('interactionCount',count);
    console.log(`The interactions in the session are ${count}`)
}


document.getElementById("clear").addEventListener("click",()=>{

    const password = localStorage.getItem("password");

    UpdateInteractionCount();

    
    if(passwordInput.value !== password  && repeatInput.value !== password ){
        console.error("Invalid Password");
        alert("Invalid Password")
        return
    }

    if(passwordInput.value === "" && repeatInput.value === ""){
        console.log("Enter password to delete");
        alert("Enter password to delete")
        
    } else if(password === passwordInput.value && passwordInput.value === repeatInput.value){
        localStorage.clear();
        console.log("data deleted successfully");
        alert("data deleted successfully")
        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        repeatInput.value = "";
    }  else {
        console.log("Validate Password");
        return
    }


    
});


window.onload = showData()

});
