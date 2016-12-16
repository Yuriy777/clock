$(document).ready(function(){
  var clock = document.getElementById('clock-face'),
      pointer = document.getElementById('pointer'),
      button = document.getElementById('button'),
      i = 0,
      setInt;
  function position() {
    var date = new Date(),
        hour = arguments[0] || date.getHours(),
        minute = arguments[1] || date.getMinutes();
      var angular = (- (hour * 30)) - minute * 0.5;
      if (angular > 360) {
        angular = angular - 360;
      }
      var ang = - angular;
      var rad = Math.PI / 180,
      radius = 312,
      X = Math.sin(angular * rad) * radius,
      Y = Math.cos(angular * rad) * radius;
      clock.style.left = X + "px";
      clock.style.top = Y + "px";
      Object.prototype.hour = hour;
      Object.prototype.minute = minute;
      pointer.style.cssText = "transform: rotate("+ ang +"deg)";
  }
  var timerId = window.setInterval(position, 60000);
  position();
  var firstH = position.prototype.hour,
      firstM = position.prototype.minute;
  $('#button').click(function(){
    var hour = firstH,
      minute = firstM;
      console.log(i)
    setInt = window.setInterval(function(){
      if (minute == 60) {
        minute = 0;
        hour++;
      }
      minute++;
      if (hour ==firstH && minute == firstM ) {
        return;
      }
      position(hour, minute);
    }, 10);
    if (i > 0) {
        i = -1;
        document.location.reload(false);
      }
    i++;
  });
});

