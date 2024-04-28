ocument.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.getElementById('imagesContainer');

    // Array of image URLs (replace these with your own image URLs)
    const imageUrls = [
        'https://mysterynursetutors.com/wp-content/uploads/2022/01/hcc.png',
        'https://clipground.com/images/u-of-h-logo-3.png',
        'https://amm-prod.s3-us-west-2.amazonaws.com/about/charitable-activities/project-cure.png',
        'https://media.discordapp.net/attachments/972692317775474739/1126926759108018356/PXL_20230527_190049801.jpg?ex=662f2f14&is=662ddd94&hm=debe8c50321c9baaab664a26ba90cc6a93c085fb7d40e8df276321975e8f8eb6&=&format=webp&width=526&height=701',
        'https://www.pngitem.com/pimgs/m/346-3468947_images-rust-lang-ar21-rust-programming-language-logo.png',
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
