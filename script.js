const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    var selectedRadioBtn = document.querySelector('input[name="rating"]:checked'); 
    clearErrorMessage();

    if (selectedRadioBtn === null) {
        showErrorMessage();
    } else {
        const container = document.querySelector('.container'); 
        container.innerHTML = `
            <img src="img/illustration-thank-you.svg">
            <div class="alert">You selected ${selectedRadioBtn.value} out of 5</div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        `;
    }
})

function showErrorMessage() {
    const div = document.createElement('div'); 
    div.className = 'alert'; 
    div.appendChild(document.createTextNode('Please select a rating'));
    const parent = document.getElementById('rating-form'); 
    const insertBeforeElement = submitBtn; 
    parent.insertBefore(div, insertBeforeElement);
}

function clearErrorMessage() {
    const currentAlert = document.querySelector('.alert'); 
    if (currentAlert) {
        currentAlert.remove(); 
    }
}