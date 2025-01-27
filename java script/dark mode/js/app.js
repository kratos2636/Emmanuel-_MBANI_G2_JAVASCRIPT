document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

/* fin ligne dark mode */

// Sélection de tous les onglets
document.querySelectorAll('.tab').forEach(tab => {
    // Ajout d'un événement 'click' à chaque onglet
    tab.addEventListener('click', function() {
        // Retirer la classe 'tab-active' de tous les onglets
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
        // Retirer la classe 'active' de tous les contenus
        document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
        // Ajouter la classe 'tab-active' à l'onglet cliqué
        this.classList.add('tab-active');
        // Vérifier quelle classe spécifique l'onglet cliqué contient et afficher le contenu correspondant
        if (this.classList.contains('tab-content1')) {
            document.querySelector('.content1').classList.add('active');
        } else if (this.classList.contains('tab-content2')) {
            document.querySelector('.content2').classList.add('active');
        } else if (this.classList.contains('tab-content3')) {
            document.querySelector('.content3').classList.add('active');
        }
    });
});





document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Sélection des champs
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const message = document.getElementById('message');

    // Réinitialisation des messages et des styles
    message.textContent = '';
    [username, email, password, confirmPassword].forEach(input => {
        input.classList.remove('valid', 'invalid');
    });

    // Validation des champs
    let isValid = true;

    if (username.value.length < 6) {
        username.classList.add('invalid');
        isValid = false;
    } else {
        username.classList.add('valid');
    }

    if (password.value.length < 8) {
        password.classList.add('invalid');
        isValid = false;
    } else {
        password.classList.add('valid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('invalid');
        isValid = false;
    } else {
        confirmPassword.classList.add('valid');
    }

    if (isValid) {
        message.textContent = 'Formulaire soumis avec succès !';
        message.style.color = 'green';
    } else {
        message.textContent = 'Veuillez corriger les erreurs dans le formulaire.';
        message.style.color = 'red';
    }
});