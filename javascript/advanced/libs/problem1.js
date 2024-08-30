var btn = document.querySelector('button');
function random(num) { return Math.floor(Math.random() * (num + 1)) }
function colorChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.getElementById('text').style.color = rndCol;
}

btn.addEventListener('click', colorChange);
