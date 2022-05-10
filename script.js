var button = document.querySelector('.submit');
var inputValue = document.querySelector('.inputValue');
var nam = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=84a16489ca9c07da15afc3ffa0c991e7')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    nam.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})

.catch(err => alert("Wrong city name!"))
})