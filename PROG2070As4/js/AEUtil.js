/**
 * File Name: validation.js
 *
 * Revision History:
 *       Azza Elgendy, March 2nd : Created
 */
function btnSubmit_click() {
    var form = $("#carForm");
    var sellerName=$("#name").val();
    localStorage.setItem("sellerName",sellerName);
    var phone=$("#phone").val();
    localStorage.setItem("phone",phone);
    var email=$("#email").val();
    localStorage.setItem("email",email);
    var city=$("#city").val();
    localStorage.setItem("city",city);
    var make=$("#make").val();
    localStorage.setItem("make",make);
    var model=$("#model").val();
    localStorage.setItem("model",model);
    var year=$("#year").val();
    localStorage.setItem("year",year);


    form.validate({
        rules: {
            name: {
                required: true,
                rangelength: [3, 20]
            },
            city: {
                required: true,
                minlength: 3

            },
            email: {
                required: true,
                email: true

            },
            phone: {
                required: true,
                checkPhone: true
            },
            make: {
                required: true,
                minlength: 3

            },
            model: {
                required: true,
                minlength: 3


            },
            year: {
                required: true,
                checkYear: true

            }
        },
        messages: {

            name: {
                required: "You must provide a name",
                rangelength: "name must be at least 3 characters"
            },
            city: {
                required: "You must provide a city",
                minlength: "city be at least 3 characters"

            },
            email: {
                required: "Email should be provided",
                email: "Please provide a valid email"

            },
            phone: {
                required: "Phone is required ",
                checkPhone: "Please enter a valid phone number"
            },
            make: {
                required: "car make is required",
                minlength: "Car make should be at least 3 Characters"

            },
            model: {
                required: "car model is required",
                minlength: "Car model should be at least 3 Characters"
            },
            year: {
                required: "year is required",
                checkYear: "please enter a valid year"

            }
        }
    });
    return form.valid();
}


jQuery.validator.addMethod("checkPhone",
    function (value, element) {
        // Regex expression for at least one capital and one number
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        // Returning whether the element is optional or a Boolean if the regex validation was successful or not
        return this.optional(element) || regex.test(value);
    },
    "Please enter valid phone Number");
// (19|20)dd

jQuery.validator.addMethod("checkYear",
    function (value, element) {
        // Regex expression for at least one capital and one number
        var regex = /^(?:19|20)\d{2}$/;

        // Returning whether the element is optional or a Boolean if the regex validation was successful or not
        return this.optional(element) || regex.test(value);
    },
    "Please custom valid year");
