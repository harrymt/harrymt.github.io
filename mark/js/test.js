function toTime(iTime) {
  return new Date(iTime * 1000);
}

function PrintHourlyForecast(fc) {
  $('.forecast').transition({ scale: 0});

  $("#result-tobehidden").removeClass("hideme");
  $("#calc-button").addClass("hideme");
  $(".subtitle").addClass("hideme");
  $("#back-button").removeClass("hideme");

  $("#weather-behind").text(fc[0].summary);
  $("#weather-current").text(fc[1].summary);
  $("#weather-ahead").text(fc[2].summary);

  $("#time-behind").text(toTime(fc[0].time).getHours() + ':00');
  $("#time-current").text(toTime(fc[1].time).getHours() + ':00');
  $("#time-ahead").text(toTime(fc[2].time).getHours() + ':00');

  $('.forecast').transition({ scale: 1, duration: 50});

  PrintYesOrNo(fc[1].summary);

  // $(".forecast").transition({ y: -380, duration: 1000});
}

function PrintYesOrNo(f) {
  f = f.toLowerCase();
  if (f.indexOf("rain") > -1) {
    // print yes
    $('.result__answer').text("YES");
  } else {
    $('.result__answer').text("NO");
    $('.result__text').addClass("hideme");
  }
}

var test;

// 1 hr above, 1 hr below and current
function ExtractForecastAroundHour(fc, hour) {
  var hrly = fc.hourly.data;
  var finalFc = [];
  var currTime;
  var i;
  var arrayi = 0;

  for (i = 0; i < hrly.length; i++) {
    currTime = toTime(hrly[i].time).getHours();
    if (currTime == hour || currTime == (parseInt(hour) + 1) || currTime == (hour - 1)) {
      finalFc[arrayi++] = hrly[i];
    }
  }

  return finalFc;
}


function GetForecastByHour() {

  // https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/52.9500,1.1333,2014-10-13T09:53:00-0100?exclude=daily,alerts,flags
  // https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/37.8267,-122.423
  // http://api.openweathermap.org/data/2.5/forecast?q=Nottingham
  // https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/52.9500,1.1333,2014-10-13T09:53:00-0100?callback=?
  // https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/52.93,-1.18?callback=?
  //https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/52.9500,1.1333,2014-10-13T09:53:00-0100?callback=?
  var jqxhr = $.getJSON("https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/52.93,-1.18?callback=?", function (data) {

    console.log(JSON.stringify(data));

    var time = $('#ihourAMPM :selected').val();
    var fchourly = ExtractForecastAroundHour(data, time);
    test = fchourly;

    // Print each hour
    PrintHourlyForecast(fchourly);

  });

  jqxhr.error(function () {
    console.log("API error");
    console.log(jqxhr);
  });
}

