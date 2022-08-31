const randomP = document.getElementsByClassName('animate-text');
const elmnt = document.getElementById("random-text");

const text = [
    'Nam posuere elementum lacus et semper. Sed sodales, risus non ultrices suscipit, purus urna ultricies eros, ac varius nulla quam non eros. Duis dapibus, nisi et tempor euismod, ante eros volutpat metus, at consequat sapien velit vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus fringilla iaculis eleifend. Sed sit amet sem libero. Sed nec erat diam.',
    'Nunc vitae sem nec felis aliquet placerat ac aliquam turpis. Quisque sem tellus, pharetra vitae nunc id, rutrum pretium quam. Curabitur cursus tincidunt dolor, eu eleifend lorem congue non. Aenean faucibus, sem et pretium consequat, ante nisl porttitor felis, volutpat laoreet odio eros vitae sapien. Ut nec enim magna. Nam lacinia libero nec nibh pellentesque accumsan. Donec ipsum eros, pellentesque in consequat non, hendrerit eu ligula. Aenean ante purus, blandit sit amet nulla vel, egestas eleifend eros. Nam consectetur nunc eu tortor venenatis pulvinar non ut augue. Praesent feugiat massa et nibh ultricies, ac luct',
    'n ac tellus sed est sagittis convallis eu eu ante. Vivamus vitae ante pulvinar, vestibulum dui in, rhoncus lacus. Morbi pellentesque massa a pulvinar consequat. Vestibulum viverra nec sem nec suscipit. Phasellus justo tellus, lacinia ac mi sed, laoreet maximus diam. Cras diam erat, facilisis et ultrices ac,',
    'Ut ultrices eros eget erat tempus, at varius ipsum sagittis. Maecenas interdum tempor eleifend. Mauris convallis mauris ut lobortis sagittis. Curabitur sed mauris finibus, pellentesque lectus placerat, tristique neque. In porttitor nunc magna, vel iaculis lectus ultricies id. Curabitur libero sapien, suscipit vel erat sed, porta congue eros. Quisque quis elit in ipsum sagittis venenatis. Donec egestas libero id libero placerat, eget fringilla orci pharetra. Maecenas'
]

for ( var i=0; i < randomP.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = randomP[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, elmnt.offsetHeight);
    randomLeft = getRandomNumber(0, elmnt.offsetWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
}