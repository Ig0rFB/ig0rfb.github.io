document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();
    let message;

    if (hours < 12) {
        message = 'Good Morning!';
    } else if (hours < 18) {
        message = 'Good Afternoon!';
    } else {
        message = 'Good Evening!';
    }

    greeting.textContent = message;
});