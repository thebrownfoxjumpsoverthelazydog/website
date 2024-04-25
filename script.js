document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.getElementById('imagesContainer');

    // Array of image URLs (replace these with your own image URLs)
    const imageUrls = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
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
How to Use:
