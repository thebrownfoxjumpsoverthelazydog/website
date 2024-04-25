ocument.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.getElementById('imagesContainer');

    // Array of image URLs (replace these with your own image URLs)
    const imageUrls = [
        'https://mysterynursetutors.com/wp-content/uploads/2022/01/hcc.png',
        'https://clipground.com/images/u-of-h-logo-3.png',
        'https://amm-prod.s3-us-west-2.amazonaws.com/about/charitable-activities/project-cure.png'
        // Add more image URLs as needed
    ];

    // Function to create image elements and append to container
    function renderImages() {
        imageUrls.forEach(url => {
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imagesContainer.appendChild(imgElement);
        });
    }

    // Call renderImages function when DOM content is loaded
    renderImages();
});
