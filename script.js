document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.getElementById('imagesContainer');

    // Array of image URLs (replace these with your own image URLs)
    const imageUrls = [
        'https://www.nrgpark.com/wp-content/uploads/HCC_1920_1080.jpg',
        'https://clipground.com/images/u-of-h-logo-3.png',
        'https://pm1.narvii.com/6298/9624c39ba4925b63480ca937ffacf2b36785d425_hq.jpg'
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
