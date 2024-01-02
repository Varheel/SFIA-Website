console.log("JavaScript is connected!");

/*// Function to update image resolution
function updateRes() {
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
            var newImageURL = currImageURL.replace('').replace('.png', ' 4k.webp');
        } 
        else 
        {
            // Replace 4K image URL with 1080p image URL
            var newImageURL = currImageURL.replace('-4k.webp', '.webp');
        }

        // Update background image URL
        element.style.backgroundImage = newImageURL;
    });
    
    // Select the specific img element
    var hammerhead = document.getElementById('hammerhead');
    if (hammerhead) {
        var currImageURL = hammerhead.src;

        // Update the image URL based on the resolution
        if (resolution >= 3840) {
            // Replace 1080p or standard image URL with 4K image URL
            var newImageURL = currImageURL.replace('.jpg', ' 4k.jpg').replace(' 1080p.jpg', ' 4k.jpg');
        } 
        else if (resolution >= 1920) {
            // Replace 4K or standard image URL with 1080p image URL
            var newImageURL = currImageURL.replace('.jpg', ' 1080p.jpg').replace(' 4k.jpg', ' 1080p.jpg');
        }
        else {
            // Replace 4K or 1080p image URL with standard image URL
            var newImageURL = currImageURL.replace(' 4k.jpg', '.jpg').replace(' 1080p.jpg', '.jpg');
        }

        // Update the img src
        hammerhead.src = newImageURL;
    }
}

// Call function on page load
window.onload = updateRes;*/