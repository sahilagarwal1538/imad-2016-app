console.log('Hi! We are printing on the console');

// change the main content
var element = document.getElementById('main content');
element.innerHTML = 'New content here!';

// move the image
var img = document.getElementById('madi');
img.onclick = function () {
img.style.marginLeft = '100px';
};