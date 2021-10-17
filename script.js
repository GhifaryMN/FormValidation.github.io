$(document).ready(function () {
    $.validator.addMethod("alphabetonly", function (value, element){
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");
    $('#myform').validate({
        rules: {
            name: {
                required: true,
                alphabetonly: true

            },
            uname: {
                required: true,
                minlength: 6,
                maxlength: 8
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
            },
            country: {
                required: true
            },
            address: {
                required: true
            },
            zip: {
                required: true,
                number: true,
                minlength: 6,
                maxlength: 6
            }
        },
        messages: {
            name: {
                required: 'this is required!',
                
            },
            uname: {
                required: 'please enter your username',
                min: 'username should be at least 6 characters'
            },
            email:{
                required: 'please enter email',
                email: 'please enter your valid email'
            },
            password: {
                required: 'please enter your password'
            }
        }
    })


});