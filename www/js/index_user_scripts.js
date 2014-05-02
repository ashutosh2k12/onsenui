var token; //The Token

function register_event_handlers()
 {   
         $(document).on("click", "#one-screen", function(evt)
        {
            //Get Prev Data
            var admin_email = $('input#admin_email').val(); //Get email and check if that is true
            var admin_pin = $('input#admin_pin').val();
			alert('token='+token);
			//Check data
			/*
			$.ajax({
			   type: "POST",
			   beforeSend: function(){ $.ui.showMask('Authenticating') },
			   url: "http://notifisolutions.com/demo/pushapp/index.php?/getuser",
			   data: {devid: token, name: admin_pin, email:admin_email},
			   dataType: "json",
			   success: function(data) {
					 $.ui.hideMask();
					 if(data.response){
						//Goto Page1
						$.ui.loadContent("#uib_page_1",false,false,"slide");
					 }
					 else{
						alert('Could not find user!!!');
						return false;
					 }
			   },
			   error: function(xhr, ajaxOptions, thrownError) {
					 alert(xhr.status);
					 alert(thrownError);
			   }
			})
			*/
        });
       

}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    //    initPushPlug();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		register_event_handlers();
        var pushNotification = window.plugins.pushNotification;
        pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"16692000019","ecb":"app.onNotificationGCM"});
    },
        // result contains any message sent from the plugin call
        successHandler: function(result) {
                alert('Callback Success! Result = '+result)
        },
        //Any errors? 
        errorHandler:function(error) {
                alert(error);
        },
        onNotificationGCM: function(e) {
		alert(e.event);
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
					alert('registered');
					token = e.regid;
                }
            break;
 
            case 'message':
						  // this is the actual push notification. its format depends on the data model from the push server
						  alert('push message = '+e.message);
                          
            break;
 
            case 'error':
              alert('GCM error = '+e.msg);
            break;
 
            default:
              alert('An unknown GCM event has occurred');
              break;
        }
    }
};

 

