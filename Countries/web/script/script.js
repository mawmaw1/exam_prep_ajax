/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {


    $("#svg2").click(function (event) {
        var target = event.target;

        var color = $(target).css("fill");

        if (color == "rgb(192, 192, 192)") {
            $(target).css("fill", "ff0000");


            var request = $.ajax({
                url: "http://restcountries.eu/rest/v1/alpha?codes=" + target.id,
                type: "GET",
                dataType: "json"
            });
            request.done(function (msg) {
               $.each(msg, function(i, obj) {
                   
               $("#result").html("Country: " + obj.name + "\n" + 
                       "Population: " + obj.population + "\n" + 
                       "Area: " + obj.area + "\n" + 
                       "Borders: " + obj.borders);
});
            });











            //       $("#result").load("http://restcountries.eu/rest/v1/alpha?codes="+target.id);
        }
        else {
            $(target).css("fill", "c0c0c0");
            $("#result").html("");
        }


    });








});