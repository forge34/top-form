let password = document.getElementById('password')
let confirmPasswrod = document.getElementById('confirm-password')



function confirm(pass , conf){
    if (pass.value != conf.value){
        pass.setAttribute('style' , 'outline-style:solid; outline-color: red;  outline-width: 0.5px;')
        conf.setAttribute('style' , 'outline-style:solid; outline-color: red;  outline-width: 0.5px;')
    }

    else if (pass.value === conf.value){
        pass.setAttribute('style' , 'outline-style:solid; outline-color: green;  outline-width: 0.5px;')
        conf.setAttribute('style' , 'outline-style:solid; outline-color: green;  outline-width: 0.5px;')
    }
}

password.addEventListener('change' , () => {confirm(password , confirmPasswrod), console.log('called')})
confirmPasswrod.addEventListener('change' , () => {confirm(password , confirmPasswrod), console.log('called')})