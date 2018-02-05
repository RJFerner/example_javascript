/*
 * Provide editing features on an image simply by css style properties
 *
 * @author Vikas Lalwani
 * @author Robert C. Duvall
 */

class ImageEditor {
    constructor () {
        // nothing needs to be set here because image 'property' takes care of itself
    }

    // where to find the img in the document (since it has no ID)
    get image() {
        return document.getElementById('imageContainer').getElementsByTagName('img')[0];
    }

    // adding an image by setting its src url
    set image(imgURL) {
        if (imgURL.length) {
            this.image.src = imgURL;
        }
    }

    // edit image simply by css style properties!
    displayImage() {
        var filters = this.getFilters();
        //console.log(filters.join(' '));
        this.image.style.filter = filters.join(' ');
    }

    // returns a list of all filter values, whether they have changed or not
    getFilters () {
        var filters = [];
        document.querySelectorAll('input[type=range]').forEach(function (element) {
            var unit = (element.id === 'blur' ? 'px' : '%');
            filters.push(element.id + '(' + element.value + unit + ')');
        });
        return filters;
    }
}

var editor = new ImageEditor();
// on pressing return, change image
document.getElementById('imgUrl').addEventListener('change', evt => {
    editor.image = evt.target.value;
    return true;
}, false);
// when sliders change, update image
document.querySelectorAll('input[type=range]').forEach(function (element) {
    element.addEventListener('change', function() {
        editor.displayImage();
        return true;
    }, false);
    // similar semantics as above but different syntax
    element.addEventListener('mousemove', () => {
        editor.displayImage();
        return true;
    }, false);
});
// reset sliders back to their original values on press of 'reset', then display new version of image
document.getElementById('imageEditor').addEventListener('reset', function () {
    setTimeout(function () {
        editor.displayImage();
    }, 0);
});
