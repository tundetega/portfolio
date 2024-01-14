const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const mailImg = document.querySelector('body > div > aside > form > div.email > img');
const passImg = document.querySelector('body > div > aside > form > div.password > img')
const text = document.querySelector('.text');
const redirect = document.querySelector('body > div > aside > a')

email.addEventListener('focus',()=>{
    mailImg.style.display = 'none';
    email.style.outline= 'none';
    email.addEventListener('keyup',()=>{
        if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            email.style.border = '';
        }else{
            email.style.border = 'red solid 2px';
            text.innerHTML = 'please fill in a valid email!';
            text.style.color= 'red';
        }
      }) 
})
email.addEventListener('blur',()=>{
    email.style.border = '';
    text.innerHTML = '';
})
password.addEventListener('focus',function(){
    passImg.style.display = 'none';
    password.style.outline= 'none';
    password.addEventListener('keyup',()=>{
        if(password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)){
            password.style.border = '';
            text.innerHTML = '';
        }else{
            password.style.border = 'red solid 2px';
            text.innerHTML= `please enter at least one number,uppercase and lowercase  <br> alphabet
            special character and length must be 8 - 15 long!`;
            text.style.color= 'red';
        }
      }) 
}) 
password.addEventListener('blur',()=>{
    password.style.border = '';
            text.innerHTML = '';
})
   
submit.addEventListener('click',(event)=>{
    let messages = []
    if (password.value === '' || email.password === ''){
        messages.push('please fill in the required fields')
        text.innerHTML = messages;
    }
   
    if(!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)){
        messages.push('please fill in the proper password')
        text.innerHTML = messages;
    }
    if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        messages.push('please fill in a valid email')
        text.innerHTML = messages;
    }
    if(messages.length > 0){
        event.preventDefault()
        
        text.style.color = 'red';
    }
    else{
        window.location.replace('/index.html')
    }

    
})
