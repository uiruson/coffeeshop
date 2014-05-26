$(document).ready(function() {
    var messageDelay = 2000;
	//validate form
	$("#blogForm").validate({
		rules: {
                email: {
                    required: true,
                    email: true
                }
            },

            errorElement: "div",
            errorClass: "has-error",
            highlight: function(element, errorClass) {
                $(element).parents(".form-group").addClass(errorClass);
            },
            unhighlight: function(element, errorClass) {
                $(element).parents(".form-group").removeClass(errorClass);
            },
            errorPlacement: function(error, element) {
                
            },
            success: function(label) {
                label.html("\u2714").addClass("valid");
            },
  			invalidHandler: function(event, validator) {
        		var errors = validator.numberOfInvalids();
                var emailInput = $("input[name='email']", this);
                if (errors) {
                        var message = errors == 1
                                ? 'Missing 1 field. '
                                : 'Missing ' + errors + ' fields.';

                        if (emailInput.length && !validator.element(emailInput)) {
                            message = "Invalid Email Address."
                        }
          			$(".blog-error-message").html('<div class="alert alert-danger">' + message + '</div>');
          			$(".blog-error-message").show();
        		} else {
          			$(".blog-error-message").errorhide();
        		}
  		    },
            submitHandler: function(form) {
                
                  //$('#contactForm').submit( submitForm).addClass( 'positioned' );
                  var blogForm = $('#blogForm');
                  var formData = {
                        'blog[email]'             : $('#blogEmail').val()
                  };

 
                  if ( !$('#blogEmail').val() ) {
                    $('.incompleteBlogDiv').fadeIn().delay(messageDelay).fadeOut();
                    blogForm.fadeOut().delay(messageDelay).fadeIn();
                 
                  } else {
                    blogForm.fadeOut().delay(8000);
                    
                    $.ajax( {
                      url: blogForm.attr( 'action' ) + "?ajax=true",
                      type: blogForm.attr( 'method' ),
                      data: formData
                    });

                    $('.thankYouMessageBlogDiv').fadeIn().delay(5000);

                  }

                return false;
            }
    });

});