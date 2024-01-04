console.log("JavaScript is connected!");

// Function to update image resolution
/*function updateRes() 
{
    // Function to check if an image exists
    function checkImage(src) 
    {
        return new Promise((resolve) => 
        {
            var img = new Image();
            img.onload = () => resolve({ src, status: true });
            img.onerror = () => resolve({ src, status: false });
            img.src = src;
        });
    }

    // Update function for img elements
    async function updateImageSrc(element, newSrc) {
        const result = await checkImage(newSrc);
        if (result.status) {
            element.src = newSrc;
        }
    }

    var resolution = window.screen.width;

    // Select all elements with background-image
    var imageElements = document.querySelectorAll(
        '[style*="background-image"]');

    imageElements.forEach(function(element) 
    {
        // Get current background image URL
        var currImageURL = element.style.backgroundImage;

        // Check for 4K resolution
        if (resolution >= 3840) 
        {
            // Replace 1080p image URL with 4K image URL
            var newImageURL = currImageURL.replace('webp/1080p', 'webp/4K').replace('1080.webp', '4k.webp');
        }

        // Update background image URL
        element.style.backgroundImage = newImageURL;
    });
    
    // Handle the specific img element
    var imgElement = document.getElementById('hammerhead');
    if (imgElement) {
        var currImageURL = imgElement.src;
        var newImageURL;

        if (resolution >= 3840) {
            newImageURL = currImageURL.replace('.jpg', ' 4k.jpg').replace(' 1080p.jpg', ' 4k.jpg');
        } 
        else if (resolution >= 1920) {
            newImageURL = currImageURL.replace('.jpg', ' 1080p.jpg').replace(' 4k.jpg', ' 1080p.jpg');
        }
        else {
            newImageURL = currImageURL.replace(' 4k.jpg', '.jpg').replace(' 1080p.jpg', '.jpg');
        }

        // Update the img src after checking
        updateImageSrc(imgElement, newImageURL);
    }
}

// Call function on page load
window.onload = updateRes;*/