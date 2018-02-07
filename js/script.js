var btn = $('#btn');
var color = $('#color');


btn.click(function () {
  $('#colorDiv').css('background', color.val());
  $('#slid').on('input', function (){
    $('#colorDiv').css('opacity', $(this).val())
  });
});
