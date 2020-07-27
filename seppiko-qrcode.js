// Seppiko QRCode

var draw_qrcode = function(text, errorCorrectionLevel) {
  return create_qrcode(text, 0, errorCorrectionLevel);
};

var create_qrcode = function(text, typeNumber, errorCorrectionLevel) {

  var qr = qrcode(typeNumber || 4, errorCorrectionLevel || 'M');
  qr.addData(text);
  qr.make();
  //  return qr.createTableTag();
  return qr.createSvgTag();
  // return qr.createImgTag();
};

function logTabs(tabs) {
  var url = tabs[0].url;
  $('#qrcode').html( draw_qrcode(url, 'M') );
  $('#qrcode svg').attr({
    'width': 300,
    'height': 300
  });

  $('#preview').text(url.substr(0, 32) + (url.length > 30 ? '...' : '') );
  $('#preview').css({
    "margin": "-10px 10px 10px",
    "font-size": "15px"
  });
}
function onError(error) {
  console.log(`Error: ${error}`);
}

$(function(){
  chrome.tabs.query({currentWindow: true, active: true}, logTabs);
});
