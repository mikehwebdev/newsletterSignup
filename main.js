const cardEl = document.getElementById('card')
const insertedEmail = document.getElementById('inserted-email')
const emailForm = document.getElementById('email-form')
const cardConfirmationEl = document.getElementById('card-confirmation')
const emailInput = document.getElementById('email-input')
const userMessage = document.getElementById('user-message')

function errorStyler() {
    emailInput.classList.add('error')
    userMessage.classList.add('error-message')
}

function validator(input){
    return input.checkValidity()
}

document.getElementById('submit-btn').addEventListener('click', e => {
        
    if (validator(emailForm)) {
        e.preventDefault()
        const emailFormData = new FormData(emailForm)
        insertedEmail.textContent = emailFormData.get('email-address')
        emailInput.classList.remove('error')
        userMessage.classList.remove('error-message')
        cardEl.style.display = 'none'
        cardConfirmationEl.style.display = 'block'
    } else {
        errorStyler()
    } 
    
})

document.getElementById('dismiss-btn').addEventListener('click', e => {
    cardEl.style.display = 'flex'
    cardConfirmationEl.style.display = 'none'
    emailInput.value = ''
})