function MakeDate(seconds) {
  return new Date(seconds * 1000);
}

function PrintHourlyForecast(fc) {
  $(".js-result-wrapper").removeClass("hide");
  $(".js-back").removeClass("hide");

  $(".js-calculate").addClass("hide");
  $(".js-time-wrapper").addClass("hide");

  $("#weather-behind").text(fc[0].summary);
  $("#weather-current").text(fc[1].summary);
  $("#weather-ahead").text(fc[2].summary);

  $("#time-behind").text(MakeDate(fc[0].time).getHours() + ':00');
  $("#time-current").text(MakeDate(fc[1].time).getHours() + ':00');
  $("#time-ahead").text(MakeDate(fc[2].time).getHours() + ':00');

  PrintYesOrNo(fc[1].summary);
}

function PrintYesOrNo(f) {
  if (f.toLowerCase().indexOf("rain") > -1) {
    $('.js-result-bool').text("YES"); // print yes
  } else {
    $('.js-result-bool').text("NO");
    $('.result__text').addClass("hide");
  }
}


// 1 hr above, 1 hr below and current
function ExtractForecastAroundHour(fc, hour) {
  var hrly = fc.hourly.data;
  var finalFc = [];
  var currTime;
  var arrayi = 0;

  for (var i = 0; i < hrly.length; i++) {
    currTime = MakeDate(hrly[i].time).getHours();
    if (currTime == hour || currTime == (parseInt(hour) + 1) || currTime == (hour - 1)) {
      finalFc[arrayi++] = hrly[i];
    }
  }

  return finalFc;
}

$(".js-calculate").on("click", function() {
  var jqxhr = $.getJSON("https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/52.93,-1.18?callback=?", function (data) {
    var time = $('.js-time :selected').val();
    PrintHourlyForecast(ExtractForecastAroundHour(data, time));
  });

  jqxhr.error(function () {
    console.log("API error");
    console.log(jqxhr);
    alert("This project is outdated :(");
  });
});
