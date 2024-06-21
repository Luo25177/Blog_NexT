document.oncontextmenu = function () {
  var uA = navigator.userAgent.toLowerCase();
  var ipad = uA.match(/ipad/i) == "ipad";
  var iphone = uA.match(/iphone os/i) == "iphone os";
  var midp = uA.match(/midp/i) == "midp";
  var uc7 = uA.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var uc = uA.match(/ucweb/i) == "ucweb";
  var android = uA.match(/android/i) == "android";
  var windowsce = uA.match(/windows ce/i) == "windows ce";
  var windowsmd = uA.match(/windows mobile/i) == "windows mobile";
  if (!(ipad || iphone || midp || uc7 || uc || android || windowsce || windowsmd)) {
    showNotification("为了有更好的体验，本站禁用右键", 1000);
  }
  return false;
};

function showNotification(message, duration) {
  var notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(function () {
    notification.style.opacity = 0;
    setTimeout(function () {
      document.body.removeChild(notification);
    }, 1000);
  }, duration);
}
