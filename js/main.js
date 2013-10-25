var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var height = window.innerHeight;
var width = window.innerWidth;

function isIt(month, day) {
  if (month == 10 && day == 25) {
    return true;
  }
  return false;
}

if (isIt(month, day)) {
  $('#scene').parallax().addClass('yes');
  $('.layer').css({
    'height': height,
    'width': width
  });
}
