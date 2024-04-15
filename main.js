const cardEl = document.getElementById('card')
const insertedEmail = document.getElementById('inserted-email')
const emailForm = document.getElementById('email-form')
const cardConfirmationEl = document.getElementById('card-confirmation')
const emailInput = document.getElementById('email-input')


emailForm.addEventListener('submit', e =>{
    e.preventDefault()
    const emailFormData = new FormData(emailForm)
    insertedEmail.textContent = emailFormData.get('email-address')
    cardEl.style.display = 'none'
    cardConfirmationEl.style.display = 'block'
})

document.getElementById('dismiss-btn').addEventListener('click', e =>{
    cardEl.style.display = 'block'
    cardConfirmationEl.style.display = 'none'
    emailInput.value = ''
})