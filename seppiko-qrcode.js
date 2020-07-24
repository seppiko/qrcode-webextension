
var create_qrcode = function(text, typeNumber,
    errorCorrectionLevel) {

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
  var qr = qrcode(typeNumber || 4, errorCorrectionLevel || 'M');
  qr.addData(text);
  qr.make();
//  return qr.createTableTag();
 return qr.createSvgTag();
  // return qr.createImgTag();
};

var url = "";

function logTabs(tabs) {
  url = tabs[0].url;
}
function onError(error) {
  console.log(`Error: ${error}`);
}

$(function(){
  let querying = browser.tabs.query({currentWindow: true, active: true});
  querying.then(logTabs, onError);

  $('#qrcode').html( create_qrcode(url, 0, 'Q') );
  $('#qrcode svg').attr({
    'width': 200,
    'height': 200
  });

});
