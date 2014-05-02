(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
      
         $(document).on("click", "#one-screen", function(evt)
        {
            $.ui.showMask('Doing work')
            //Get Prev Data
            var admin_email = $('input#admin_email').val(); //Get email and check if that is true
            var admin_pin = $('input#admin_pin').val();
            alert('email='+admin_email+' and pin='+admin_pin);
            //Do Ajax Data
            $.ui.loadContent("#uib_page_1",false,false,"slide");
			$.ui.hideMask()
            
        });
       

}
 $(document).ready(register_event_handlers);
})();

 

