var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var height = window.innerHeight;
var width = window.innerWidth;

function isIt(month, day) {
  var hash = window.location.hash;
  if (hash == '#force-yes') {
    return true;
  }
  else if (hash == '#force-no') {
    return false;
  }
  else if (month == 11 && day == 23) {
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

