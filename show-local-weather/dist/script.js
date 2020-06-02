$(function() {
  var randomNum = Math.floor(Math.random() * 10) + 1;
  
  var long;
  var lat;
  var search;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      long = position.coords.longitude;
      lat = position.coords.latitude;

      $("#data").html("latitude: " + lat + "<br>longitude: " + long);
      
      fetchApi();
    });
  }
  
  function fetchApi() {
    var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=fad830ece2ebb9243091630cdbc92645';

    $.getJSON(api, function(data) {
      var tempCelsius = Math.round(((data.main.temp) - 273.15));
      if(tempCelsius > 28) {
        search = "summer";
      } else if(tempCelsius < 25 & tempCelsius > 10) {
        search = "spring";
      } else {
        search = "winter";
      }
      var tempFahrenheit = Math.round(tempCelsius * 9/5 + 32);
      var icon = data.weather[0].icon;
      console.log(icon);
      $("#temperature").html(tempCelsius);
      $("#city").html(data.name + ", " + data.sys.country);
      $("#conditions").html(data.weather[0].description);
      $("#humidity").html(data.main.humidity + "%");
      $("#wind").html(Math.floor(data.wind.speed * 1.852) + "kph");
      $('img[id="icon"]').attr("src", "http://imgh.us/" + icon + "-weathers.svg");
      $("#far").on("click", function(){
        $("#degrees").html("°F ");
        $("#temperature").html(tempFahrenheit);
      });
      $("#cel").on("click", function(){
        $("#degrees").html("°C ");
        $("#temperature").html(tempCelsius);
      });
      $("#white").on("click", function(){
        $(".data").css("background-color", "rgba(255,255,255,0.8)");
      });
      $("#blue").on("click", function(){
        $(".data").css("background-color", "rgba(200,220,255,0.8)");
      });
      $("#red").on("click", function(){
        $(".data").css("background-color", "rgba(255,220,200,0.8)");
      });
      $("#green").on("click", function(){
        $(".data").css("background-color", "rgba(200,255,220,0.8)");
      });
      $("#yellow").on("click", function(){
        $(".data").css("background-color", "rgba(240,240,200,0.8)");
      });
      
      var apiImg = 'https://pixabay.com/api/?key=5892138-77072c307b4497d0929fb37db&q=' + search + '&image_type=photo&min_width=1920&min_height=1080';
      
        $.getJSON( apiImg, function(bg) {
        $('body').css('background-image', 'url("' + bg.hits[randomNum].webformatURL + '")');
        });   
      
    });
  }
  
});