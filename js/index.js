const API_KEY = `c8dc9c9399fae027e6fd4686fca1f8ae
`
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperatureShow(data))
}
const displayTemperatureShow = data =>{
    // const tempShow =document.getElementById('Temperature');
    // tempShow.innerText = data.main.temp;
    setInnerTextById('Temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
}
const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const search = searchField.value;
    searchField.value = "";
    document.getElementById('city').innerText = search;
    loadTemperature(search);
})

loadTemperature(city);