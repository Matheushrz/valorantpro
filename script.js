// DECLARANDO CONST 
const form=document.getElementById('form')
const firstname=document.getElementById('firstname')
const lastname=document.getElementById('lastname')
const email=document.getElementById('email')
const password=document.getElementById('password')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateInput();
});

// FORMULARIO , NOME , SOBRENOME, ETC
 const validateInput=()=>{
    const firstnameValue=firstname.value.trim()
    const lastnameValue=lastname.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()

    if(firstnameValue === ''){
        setErrorFor(firstname, 'O nome não pode estar vazio')
       changeColor()

    }else{
        setSucessFor(firstname)
    }

    if(lastnameValue === ''){
        setErrorFor(lastname, 'O sobrenome não pode estar vazio')
    }else{
        setSucessFor(lastname)
    }
    if(emailValue === ''){
        setErrorFor(email, 'Parece que este não é um e-mail')
    }else{
        setSucessFor(email)
    }
   
    if(passwordValue === ''){
        setErrorFor(password, 'A senha não pode estar vazia')
    }else{
        setSucessFor(password)
    }
    
}

const setErrorFor=(input,message)=>{
    const inputArea=input.parentElement;
    const small=inputArea.querySelector('small')
    small.innerText = message;
    inputArea.className= 'input_area error'
}

const setSucessFor=(input)=>{
    const inputArea=input.parentElement;
    inputArea.className= 'input_area success'
}


const changeColor=(toColor)=> {
    addCSS = document.createElement('style');
    addCSS.innerHTML = "::placeholder { color: " + toColor + "; }";
    document.body.append(addCSS);
}
