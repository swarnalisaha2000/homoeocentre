
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate(input) {
        // Check if the input is of type 'tel' or has the name 'phone'
        if($(input).attr('type') == 'tel' || $(input).attr('name') == 'phone') {
            // Validate phone number (e.g., 10-digit numbers)
            if($(input).val().trim().match(/^\d{10}$/) == null) {
                return false;
            }
        } else {
            // General validation for other input types
            if($(input).val().trim() == '') {
                return false;
            }
        }
        return true; // Add return true for valid inputs
    }
    

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);