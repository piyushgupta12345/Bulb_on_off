const bulbImg = document.querySelector('img');
const button = document.querySelector('button');

// button click function
button.addEventListener('click', function () {
    console.log(bulbImg.src)

    // conditions bulb On/Off
    if (bulbImg.src.match('off')) {
        bulbImg.src = './img/on.jpg';
        button.innerHTML = 'Turn Off';
        document.body.style.backgroundColor = 'red';
    } else {
        bulbImg.src = './img/off.jpg';
        button.innerHTML = 'Turn On';
        document.body.style.backgroundColor = 'blue';
    }

})