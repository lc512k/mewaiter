$(document).ready(function() {
  "use strict";
  var $submitBtn, $name, $email, $comments, $errorMsg, $successMsg, $form;

  $submitBtn = $('#submit');
  $name = $('#name');
  $email = $('#email');
  $comments = $('#comments');
  $errorMsg = $('.js-error');
  $successMsg = $('.js-success');

  $submitBtn.on('click', function() {
    console.info($name.val(), $email.val(), $comments.val())
    $.post("/ws/mail", {
      name: $name.val(),
      email: $email.val(),
      text: $comments.val()
    }).done(function(data) {
      console.log(data, $successMsg)
      $successMsg.show();
      setTimeout(function() {
        $successMsg.fadeOut(1000);
      }, 5000);
    }).fail(function(data) {
      console.log('error', data)
      $errorMsg.show();
      setTimeout(function() {
        $errorMsg.fadeOut(1000);
      }, 5000);
    });
  });
});
