var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        window.addEventListener("message", function(event) {
		var data = event.data;
		var action = data.action;
		if(action == "LINK") {
			var parameters = data.parameters;
			var href = parameters[0];
			window.open(href, "_system");
		}
	}, false);
    	
        app.receivedEvent('deviceready');
        // http://docs.phonegap.com/en/2.5.0/cordova_splashscreen_splashscreen.md.html#hide
        navigator.splashscreen.hide();
        // Ignore back button in android
        // document.addEventListener('backbutton', function() {}, false);

    }
};
