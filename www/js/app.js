var $ = Dom7;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  // App routes
  routes: routes,
  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

var ncmb;
const applicationKey = '';
const clientKey = '';
ncmb = new NCMB(applicationKey, clientKey);

// Function to check authentication status
// true if authentication is ok / false if not logged in or there is a session problem
const checkAuth = async () => {
  // Get the current logged in user
  const user = ncmb.User.getCurrentUser();
  // If no user is logged in, return false
  if (!user) return false;
  try {
    // Test the session validity
    await ncmb.DataStore('Test').fetch();
    // If valid return true
    return true;
  } catch (e) {
    // If there is a problem with the session return true
    return false;
  }
}

const serializeForm = (form) => {
  var params = {} 
  if (form === "form#login") {
    params.userName = $("#username").val();
    params.password = $("#password").val();
  }
  if (form === "form#new"){
    params.couponName = $("#couponName").val();
    params.discount = $("#discount").val();
    params.startDate = $("#startDate").val();
    params.endDate = $("#endDate").val();
    params.letterColor = $("#color-picker-wheel-lt").val();
    params.backgroundColor = $("#color-picker-wheel-bg").val();
  }
  return params;
}

// Function to separate display for user and admin
const changeVisible = (el) => {
  // Get current logged in user
  const user = ncmb.User.getCurrentUser();
  // Erase both admin and user info
  el.find('.admin,.no-admin').hide();
  // If it's an admin
  if (user && user.admin) {
    // Show the admin info
    el.find('.admin').show();
  } else {
    // Else show the user info
    el.find('.no-admin').show();
  }
}

// Convert blob format to URI data
const photoReader = async (file) =>{
  let reader = new FileReader();
  reader.readAsDataURL(file);
  await new Promise(resolve => reader.onload = function(){ resolve() })
  return reader.result;
}









