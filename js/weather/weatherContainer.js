var weatherContainer = {

}

weatherContainer.init = function () {

  weather.init();



  weather1 = $.extend({index:1}, weather);
  weather1.init();

  weather2 = $.extend({index:2}, weather);
  weather2.init();

//  weather3 = $.extend({index:3}, weather);
//  weather3.init();

  $(".weatherContainer1").append("<div class='location1 small dimmed'></div><div class='windsun1 small dimmed'></div><div class='temp1'></div><div class='forecast1 small dimmed'></div>");
  $(".weatherContainer2").append("<div class='location2 small dimmed'></div><div class='windsun2 small dimmed'></div><div class='temp2'></div><div class='forecast2 small dimmed'></div>");
//  $(".weatherContainer3").append("<div class='windsun3 small dimmed'></div><div class='temp3'></div><div class='forecast3 small dimmed'></div>");



}
