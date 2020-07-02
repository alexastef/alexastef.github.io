$(document).ready(function() {

    const form = $("#email-form");
    const status = document.getElementById("form-status");


    $("#submit").on("click", function(event) {
        event.preventDefault();
        
        let newEmail = {
            name: $("#form-name").val().trim(),
            email: $("#form-email").val().trim(),
            message: $("#form-body").val().trim()
        };

        //   ajax(form.method, form.action, newEmail, success, error);
          $.ajax({
            url: "https://formspree.io/xknqqwdl",
            method: "POST",
            data: newEmail,
            dataType: "json"
          }).then(() => console.log("email sent"));
        });
        
    // });

    // window.addEventListener("DOMContentLoaded", function() {

    //     // get the form elements defined in your form HTML above
        
    //     const form = document.getElementById("email-form");
    //     const button = document.getElementById("submit");
    
        // Success and Error functions for after the form is submitted
        
        // function success() {
        //   form.reset();
        //   button.style = "display: none ";
        //   status.innerHTML = "Thanks!";
        // }
    
        // function error() {
        //   status.innerHTML = "Oops! There was a problem.";
        // }
    

    //   // helper function for sending an AJAX request
    
    //   function ajax(method, url, newEmail, success, error) {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open(method, url);
    //     xhr.setRequestHeader("Accept", "application/json");
    //     xhr.onreadystatechange = function() {
    //       if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //       if (xhr.status === 200) {
    //         success(xhr.response, xhr.responseType);
    //       } else {
    //         error(xhr.status, xhr.response, xhr.responseType);
    //       }
    //     };
    //     xhr.send(newEmail);



    });
