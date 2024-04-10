document.addEventListener('DOMContentLoaded', function () {
    const defaultAvatars = document.getElementById('defaultAvatars');
    const avatarImage = document.getElementById('avatarImage');
    const subtextButton = document.querySelector('.subtext button');
    const nextButton = document.getElementById('nextButton');

    // Hide default avatars initially
    defaultAvatars.style.display = 'none';

    // Function to toggle visibility of default avatars
    subtextButton.addEventListener('click', function () {
        if (defaultAvatars.style.display === 'none') {
            defaultAvatars.style.display = 'block';
        } else {
            defaultAvatars.style.display = 'none';
        }
    });

    // Event listener for selecting a default avatar
    defaultAvatars.addEventListener('click', function (event) {
        if (event.target.classList.contains('default-avatar')) {
            const selectedAvatarSrc = event.target.getAttribute('src');
            avatarImage.setAttribute('src', selectedAvatarSrc);
            avatarImage.style.display = 'block';
            // Hide camera icon when avatar is selected
            document.querySelector('.avatar-upload .fas.fa-camera').style.display = 'none';
            // Hide default avatars after selection
            defaultAvatars.style.display = 'none';
        }
    });

    // Event listener for clicking on "Choose image" button
    document.getElementById('chooseImageButton').addEventListener('click', function () {
        document.getElementById('imageInput').click();
    });

    // Event listener for selecting an image
    document.getElementById('imageInput').addEventListener('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var avatarImage = document.getElementById('avatarImage');
                avatarImage.src = e.target.result;
                avatarImage.style.display = 'block';
                // Hide camera icon when image is uploaded
                document.querySelector('.avatar-upload .fas.fa-camera').style.display = 'none';
            };
            reader.readAsDataURL(file);
        } else {
            // If no file is selected, show the camera icon
            document.querySelector('.avatar-upload .fas.fa-camera').style.display = 'block';
        }
    });

    // Function to toggle visibility of default avatars
    function toggleDefaultAvatars() {
        if (!defaultAvatarsVisible) {
            defaultAvatars.style.display = 'block';
            defaultAvatarsVisible = true;
        } else {
            defaultAvatars.style.display = 'none';
            defaultAvatarsVisible = false;
        }
    }

    document.getElementById('location').addEventListener('input', function () {
        var locationInput = document.getElementById('location').value;
        var nextButton = document.getElementById('nextButton');
        if (locationInput.trim() !== '') {
            nextButton.classList.add('active');
        } else {
            nextButton.classList.remove('active');
        }
    });
    nextButton.addEventListener('click', function () {
        const selectedAvatarSrc = avatarImage.getAttribute('src');
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        // Redirect to index2.html with selected image and email as query parameters
        window.location.href = 'index2.html?avatar=' + encodeURIComponent(selectedAvatarSrc) + '&email=' + encodeURIComponent(email);
    });
});
