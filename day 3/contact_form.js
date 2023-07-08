function backToResume(){
    window.location.assign('./../day 2/resume.html');
}

function showValuesAndValidate(event){
    const name = document.querySelector('[name=name]').value;
    const email = document.querySelector('[name=email]').value;
    const password = document.querySelector('[name=password]').value;
    if(password.length < 9 ){
        alert("Password should be atleast 8 characters long ");
        event.preventDefault();
    }
    else{
        alert(`Thank you ${name}, your request is sent`);
    }

    
}