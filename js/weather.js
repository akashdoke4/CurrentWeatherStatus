$(document).ready(function () {

    $('#submit').click(function () {
        var city = $('#city').val();
        if (city != "") {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city +"&units=metric"+ "&APPID=a6eb1debe19ce1c521d0b6118bcbe97b",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {

                    var widget = show(data);
                    $(".show").html(widget);
                    $('#city').val(' ');
                }



            });

        } else {

            $('#error').html("Enter Proper City Name!");
        }




    });



});

function show(data) {
    return "<h2 style='font-size:50px;font-weight:bold'>Current Weather for  :" + data.name + ", " + data.sys.country + "</h2>" +"<hr style='height:5px;color:grey;'>"+
        "<h3>Weather :" + data.weather[0].main + "</h3>" +
        "<h3><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></h3>"+
        "<h3>Description :" + data.weather[0].description + "</h3>" +
        "<h3>Temperature :" + data.main.temp + "</h3>" +
        "<h3>Humidty :" + data.main.humidity + "</h3>" +
        "<h3>Pressure :" + data.main.pressure + "</h3>" +
        "<h3>Max Temp :" + data.main.temp_max + "</h3>" +
        "<h3>Min Temp :" + data.main.temp_min + "</h3>";




}
