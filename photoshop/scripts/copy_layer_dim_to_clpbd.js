// Check if a document is open and a layer is selected
if (app.documents.length > 0 && app.activeDocument.activeLayer) {
    var layer = app.activeDocument.activeLayer; // Get the active layer
    var bounds = layer.bounds; // Get the bounds of the layer
    var width = bounds[2] - bounds[0]; // Calculate width
    var height = bounds[3] - bounds[1]; // Calculate height

    // Convert width and height to pixels if necessary (depends on the ruler units setting)
    if (app.preferences.rulerUnits != Units.PIXELS) {
        width = width.as('px');
        height = height.as('px');
    }

    // Create a string to copy to the clipboard
    var dimensionString = width.value + " x " + height.value;

    // Copy dimensions to clipboard
    copyToClipboard(dimensionString);
} else {
    alert("No active document or active layer.");
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    var keyTextData = app.charIDToTypeID('TxtD');
    var keyClipboardText = app.charIDToTypeID('ClpT');
    var textStrDesc = new ActionDescriptor();
    textStrDesc.putString(keyTextData, text);
    executeAction(keyClipboardText, textStrDesc, DialogModes.NO);
}

// Alert the user
alert("Layer dimensions copied to clipboard: " + dimensionString);
