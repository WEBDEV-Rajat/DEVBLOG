const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click',()=>{wrapper.classList.add('active'); });
loginLink.addEventListener('click',()=>{wrapper.classList.remove('active'); });

document.getElementById("Register").onclick = function() {
       location.href = "index.html";
};
document.getElementById("Login").onclick = function() { 
    location.href = "contennt.html";
};