console.log("JavaScript is connected!");

// JS variables
var vh = window.innerHeight;
var vw = window.innerWidth;
var headerHeight = (vh * 0.11) + 'px';
var mcHeight = (vh * 0.85) + 'px';
var footerHeight = (vh * 0.04) + 'px';


// Ok button onclick event
document.getElementById("okButton").onclick = function() 
{
    document.getElementById("dialogBox").style.display = "none";
}
console.log(window.devicePixelRatio)
/*
function detectZoomLevel() {
    // Example implementation, this will vary depending on the method used
    var zoomLevel = window.devicePixelRatio;
    return zoomLevel;
}

function adjustForZoom() 
{
    var element = document.querySelector(".col-md-70.col-lg-70")
    var zoomLevel = detectZoomLevel();
    // DPR floats =/= browser zoom percentage
    var thirtyPercent = 0.38;
    var fiftyPercent = 0.63;
    var sixty_sevenPercent = 0.84;
    var eightyPercent = 1;
    var ninetyPercent = 1.14;
    var hundredPercent = 1.26;
    console.log([zoomLevel])
    var UHD = 3840;
    var qualHD
    var fullHD =1920;

    if (zoomLevel < thirtyPercent)
    {
        element.style.scale = "60% 100%"
    }
    else if (zoomLevel < fiftyPercent) 
    {
        element.style.scale = "70% 100%";
    } 
    else if (zoomLevel < sixty_sevenPercent)
    {
        element.style.scale = "80% 100%"
    } 
    else if (zoomLevel < eightyPercent)
    {
        element.style.scale = "90% 100%"
    } 
    else if (zoomLevel < ninetyPercent) 
    {
        element.style.scale = "100% 100%"
    }
}




// Debounce function to limit resizing for performance
function debounce(func, wait) 
{
    var timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}
*/

// function for SASS command reminder
function initialize() 
{
    //adjustForZoom();

    // Get the last session timestamp
    var lastSessionTimestamp = localStorage.getItem("lastSessionTimestamp");

    // Get current timestamp
    var currentTimestamp = new Date().getTime();

    // Check if the dialog has already been shown or if the last session is older than 2 hrs
    if (localStorage.getItem("dialogShown") !== "true" || (lastSessionTimestamp && currentTimestamp - lastSessionTimestamp > 7200000)) {
        document.getElementById("dialogBox").style.display = "block";
        // Set the flag in localStorage
        localStorage.setItem("dialogShown", "true");
        // Update the timestamp
        localStorage.setItem("lastSessionTimestamp", currentTimestamp);
    }
}

window.onload = initialize;

/*
// Debounced event listener for window resize
window.addEventListener('resize', debounce(function() 
{
    // Adjust sizes based on new dimensions
    adjustForZoom();
}, 20)); // Wait for 20ms before executing*/