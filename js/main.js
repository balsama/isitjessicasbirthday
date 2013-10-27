var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var height = window.innerHeight;
var width = window.innerWidth;

function isIt(month, day) {
  if (month == 10 && day == 27) {
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
  $('.yes #answer').text('yes :)');
}
