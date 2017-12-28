var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&APPID=3d69a07d5baee2d3dc0b200eb9814370';
var units = '&units=metric';

function setup() {
    createCanvas(400,200);

    var button = select('#submit');
    button.mousePressed(weatherAsk);

    input = select('#city');
}

    function weatherAsk(){
    var url = api + input.value() + apikey +units;
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;

}

function draw() {
    background(0);
    if (weather) {
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        ellipse(100,100, temp, temp);
        ellipse(300,100, humidity, humidity);
        
    }
}