function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUser(user) {
    const users = getUsers();
    user.id = Date.now().toString();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('phone')?.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.substring(0, 11);
    
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = value;
});

function validateForm(data) {
    let isValid = true;

    if(!data.name) {
        showError('nameError', 'Nome é obrigatório');
        isValid = false;
    }

    if(data.phone.replace(/\D/g, '').length < 11) {
        showError('phoneError', 'Telefone inválido');
        isValid = false;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        showError('emailError', 'E-mail inválido');
        isValid = false;
    }

    if(!data.description) {
        showError('descError', 'Descrição é obrigatória');
        isValid = false;
    }

    if(data.rating < 0 || data.rating > 10) {
        showError('ratingError', 'Avaliação inválida');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.add('active');
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(error => {
        error.classList.remove('active');
    });
}

document.getElementById('userForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors();

    const user = {
        name: document.getElementById('name').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        description: document.getElementById('description').value.trim(),
        rating: document.getElementById('rating').value
    };

    if(validateForm(user)) {
        saveUser(user);
        window.location.href = 'list.html';
    }
});