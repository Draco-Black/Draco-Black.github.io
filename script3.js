document.addEventListener("DOMContentLoaded", function () {
    // Function to extract the avatar URL from the query string
    function getAvatarUrlFromQueryString() {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        return urlParams.get('avatar');
    }

    // Get the avatar URL from the query string
    var avatarUrl = getAvatarUrlFromQueryString();

    // Set the avatar image source
    var avatarImg = document.getElementById('avatarImg');
    if (avatarUrl) {
        avatarImg.src = decodeURIComponent(avatarUrl);
    } else {
        // Set a default image if avatar URL is not provided
        avatarImg.src = 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1712645841~exp=1712646441~hmac=01574ab885bbcca78b4474b8572b74db14544d851c59db2d79a450de4badcacf';
    }

    function getEmailFromQueryString() {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        return urlParams.get('email');
    }

    // Get the email from the query string
    var userEmail = getEmailFromQueryString();

    // Update the HTML content of the <p> element with the user's email
    var confirmationText = document.getElementById('confirmationText');
    confirmationText.innerHTML += '<strong>' + userEmail + '</strong>';
});

document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('menu-open');
    });
});