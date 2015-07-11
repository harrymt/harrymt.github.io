function MakeDate(seconds) {
  return new Date(seconds * 1000);
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

  $("#time-behind").text(MakeDate(fc[0].time).getHours() + ':00');
  $("#time-current").text(MakeDate(fc[1].time).getHours() + ':00');
  $("#time-ahead").text(MakeDate(fc[2].time).getHours() + ':00');

  $('.forecast').transition({ scale: 1, duration: 50});

  PrintYesOrNo(fc[1].summary);
}

function PrintYesOrNo(f) {
  if (f.toLowerCase().indexOf("rain") > -1) {
    $('.result__answer').text("YES"); // print yes
  } else {
    $('.result__answer').text("NO");
    $('.result__text').addClass("hideme");
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


function GetForecastByHour() {
  var jqxhr = $.getJSON("https://api.forecast.io/forecast/02a4fe56c45dc599d4befb44dd5aede9/52.93,-1.18?callback=?", function (data) {
    var time = $('#ihourAMPM :selected').val();
    PrintHourlyForecast(ExtractForecastAroundHour(data, time));
  });

  jqxhr.error(function () {
    console.log("API error");
    console.log(jqxhr);
    alert("This project is outdated :(");
  });
}

