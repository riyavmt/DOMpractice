const myForm = document.querySelector("#myform");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const usersList = document.querySelector("#userList");

myForm.addEventListener("submit",onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value==="" || emailInput.value===""){
        msg.classList.add("error");
        msg.textContent ="PLease Enter All Fields!";
    }
    else{
        const li= document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
    
    usersList.appendChild(li);

    nameInput.value="";
    emailInput.value="";
    }
}
