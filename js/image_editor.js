/*
 * Provide editing features on an image simply by css style properties
 *
 * @author Vikas Lalwani
 * @author Robert C. Duvall
 */

// where to find the img in the document (since it has no ID)
function getImage() {
    return document.getElementById('imageContainer').getElementsByTagName('img')[0];
}

// adding an image by setting its src url
function addImage() {
    if (this.value.length) {
        getImage().src = this.value;
    }
    return true;
}

// edit image simply by css style properties!
function editImage() {
    var filters = [];
    document.querySelectorAll('input[type=range]').forEach(function (element) {
        var unit = (element.id === 'blur' ? 'px' : '%');
        filters.push(element.id + '(' + element.value + unit + ')');
    });
    //console.log(filters.join(' '));
    getImage().style.filter = filters.join(' ');
    return true;
}


// on pressing return, change image
document.getElementById('imgUrl').addEventListener('change', addImage, false);
// when sliders change, update image
document.querySelectorAll('input[type=range]').forEach(function (element) {
    element.addEventListener('change', editImage, false);
    element.addEventListener('mousemove', editImage, false);
});
// reset sliders back to their original values on press of 'reset'
document.getElementById('imageEditor').addEventListener('reset', function () {
    setTimeout(function () {
        editImage();
    }, 0);
});
