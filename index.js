let Email = document.getElementById("email")
let Password = document.getElementById("password")
let OUTPUT = document.getElementsByClassName("output")


let Correctemail = "saylani@gmail.com"
let Correctpassword = "524524"

function Add(){
let emailenter = Email.value;
let enterpassword = Password.value;

    if(emailenter === Correctemail && enterpassword === Correctpassword){
        alert("𝐿𝑜𝑔𝒾𝓃 𝓈𝓊𝒸𝒸𝑒𝓈𝓈𝒻𝓊𝓁𝓁")
      
    }else{
        alert("彡[ɪɴᴠᴀʟɪᴅ]彡")
    }
        
}