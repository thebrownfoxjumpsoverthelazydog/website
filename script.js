document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.getElementById('imagesContainer');

    // Array of image URLs (replace these with your own image URLs)
    const imageUrls = [
        'https://discourse.disneyheroesgame.com/uploads/default/original/3X/f/6/f6c0444a65bb8ea035d671ec8d4acdce982aae39.jpeg',
        'https://us-tuna-sounds-images.voicemod.net/decbf6b1-5b72-42ee-865d-5534b31f99ad-1672568939460.jpg',
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
