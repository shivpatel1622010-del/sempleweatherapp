fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=API_KEY")
.then(response =>response.json())
.then(data => {
    console.log(data);
alert("Temperature: " + data.main.temp);
});
