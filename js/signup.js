$('.vergeten').on('click',function() {
    $('.forgotten').toggleClass('hide');
    $('.login').toggleClass('hide');
  });

  $('.aanmelden-registreren').on('click',function() {
    $('.login').toggleClass('hide');
    $('.aanmelden').toggleClass('hide');
  });


  $(document).ready(function (){
    validate();
    $('#inputName, #inputEmail, #inputTel').change(validate);
});

function validate(){
    if ($('').val().length   >   0   &&
        $('#inputEmail').val().length  >   0   &&
        $('#inputTel').val().length    >   0) {
        $("input[type=submit]").prop("disabled", false);
    }
    else {
        $("input[type=submit]").prop("disabled", true);
    }
}