/* Start Js Header */

var myButton = document.getElementById('Button');
myButton.onmousemove = function() {
    myButton.style.backgroundColor = "red";
    myButton.style.color = "#fff";
};

myButton.onmouseout = function() {
    myButton.style.backgroundColor = "#59405c";
};

/* End Js Header */

/* Start Js info */

var Show = document.getElementById('Button-show');
Show.onclick = function() {
    infoShow.style.visibility = 'visible';
};

Show.ondblclick = function() {
    infoShow.style.visibility = 'hidden';
    spa.style.visibility = 'hidden';
}

var span = document.getElementById('spa'),
    myIon = document.getElementById('icon');
myIon.onmouseenter = function() {
    spa.style.visibility = 'visible';
    spa.style.backgroundColor = '#355c7d';
    spa.style.padding = '10px';
    spa.style.borderRadius = '5px';
    icon.style.color = '#283c63';

};
myIon.onmouseout = function() {
    icon.style.color = '#d72323';
}

myIon.onclick = function() {
    spa.style.visibility = 'hidden';
    icon.style.color = '#d72323';
}

spa.onclick = function() {
    spa.style.visibility = 'hidden';
}

/* End Js info */

/* Start Js Details */

var calcMany = document.getElementById('calc'),
    calcMany2 = document.getElementById('calc2'),
    calcMany3 = document.getElementById('calc3'),
    image = document.getElementById('imag'),
    image2 = document.getElementById('imag2'),
    image3 = document.getElementById('imag3'),
    c = 0,
    c2 = 0,
    c3 = 0;

image.onmouseout = function() {
    c = c + 1
    calcMany.innerHTML = c;
};

image2.onmouseout = function() {
    c2 = c2 + 1
    calcMany2.innerHTML = c2;
};

image3.onmouseout = function() {
    c3 = c3 + 1
    calcMany3.innerHTML = c3;
};

var media1 = document.getElementById('show-media'),
    media2 = document.getElementById('show-media2'),
    media3 = document.getElementById('show-media3'),
    myButton1 = document.getElementById('butt-show'),
    myButton2 = document.getElementById('butt-show2'),
    myButton3 = document.getElementById('butt-show3');

myButton1.onclick = function() {
    media1.style.visibility = 'visible';

};

myButton2.onclick = function() {
    media2.style.visibility = 'visible';

};

myButton3.onclick = function() {
    media3.style.visibility = 'visible';

};

myButton1.ondblclick = function() {
    media.style.visibility = 'hidden';
};

myButton2.ondblclick = function() {
    media2.style.visibility = 'hidden';
};

myButton3.ondblclick = function() {
    media3.style.visibility = 'hidden';
};

/* Start Js Details */

/** Start New Page */

function valid() {

    var t = prompt('User Name Is : \"omar\"');

    if (t == "omar") {

        window.location = "index.html";

    } else {
        alert('You Shoud A User Name Please');
    }
};
/** End New Page */