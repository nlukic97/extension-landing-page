document.getElementById('email-submit').addEventListener('click',function(){
    let email = document.getElementById('email').value
    console.log(email);

    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let form = document.querySelector('.form')

    if(email.match(re) === null){
        showError(form)
        console.log('not email');
    } else {
        hideError(form)
        submit(email)
        document.getElementById('email').value = ''
    }
})

function submit(email){
    let data = {email:email}
    // submit this data somewhere
    console.log('Submitting data',data);
}

function showError(item){
    //display the background question mark, and the error text underneath
    item.classList.add('error')
}

function hideError(item){
    item.classList.remove('error')
}