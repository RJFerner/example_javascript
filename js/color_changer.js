/*
 * Simple example of a variety of ways to change something's color.
 *
 * @author Robert C. Duvall
 */

// functions that do the actual work
function changeByColor(event) {
    document.getElementById('js-colored').style.backgroundColor = event.target.value;
}

function changeByText() {
    console.log(this.value);
    document.getElementById('js-colored').style.backgroundColor = this.value;
}

function changeByCSS() {
    var styles = document.getElementById('js-colored').className.split(' '),
        last = 'duke';
    if (styles.length > 1) {
        if (styles.pop() === 'duke') {
            last = 'unc';
        } else {
            last = 'duke';
        }
    }
    styles.push(last);
    document.getElementById('js-colored').className = styles.join(' ');
}

function changeFont() {
    console.log(event);
    var k,
        elements = document.getElementsByTagName('p');
    for (k = 0; k < elements.length; k += 1) {
        elements[k].style.fontSize = this.value + 'px';
    }
}


// add interactivity to HTML elements
// an example to see what is happening
var b = document.getElementById('button');
console.log(b);
b.onclick = changeByCSS;
console.log(b.onclick);
// the typical way
document.getElementById('range').addEventListener('input', changeFont, false);
document.getElementById('color').addEventListener('change', changeByColor, false);
document.getElementById('text').addEventListener('change', changeByText, false);
