function toggleSelection(option) {
    option.classList.toggle('selected');
    updateMultiselectText();
}

function updateMultiselectText() {
    var selectedOptions = document.querySelectorAll('.option.selected');
    var multiselectText = document.querySelector('.multiselect-text');
    var multiselectText2 = document.querySelector('.multiselect-text2');
    var finishButton = document.getElementById('finishButton');

    if (selectedOptions.length > 0) {
        multiselectText.style.display = 'block';
        multiselectText2.style.display = 'block';
        finishButton.classList.add('active');
    } else {
        multiselectText.style.display = 'none';
        multiselectText2.style.display = 'none';
        finishButton.classList.remove('active');
    }
}

// function finishSelection() {
//     window.location.href = "index3.html";
// }
function finishSelection() {
    var avatarUrl = getAvatarUrlFromQueryString(); // Assuming you have a function to extract the avatar URL from the query string
    var email = getEmailFromQueryString(); // Assuming you have a function to extract the email from the query string
    console.log("Avatar URL:", avatarUrl);
    console.log("Email:", email);
    var url = 'index3.html?avatar=' + encodeURIComponent(avatarUrl) + '&email=' + encodeURIComponent(email);
    console.log("Redirect URL:", url);
    window.location.href = url; // Redirect to index3.html with the avatar URL and email
}

function getEmailFromQueryString() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get('email');
}

// Function to extract the avatar URL from the query string
function getAvatarUrlFromQueryString() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get('avatar');
}

