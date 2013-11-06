$(function () {
  $('#tab1').addClass('active');
  $('.active').show();


  $('li').on('mouseover', function(event){
      event.preventDefault();

      // switch active class to li just clicked
    $('li').removeClass('active');
    $(this).addClass('active');

    // grab id of tab of div containing paragraphs to show
    var id = $(this).children('a').attr('href');

    // hide any div.active
    $('.tab.active').hide();

    // move .active class from the previous div element to the just clicked li a.href attribute
    $('.tab.active').removeClass('active');
    $(id).addClass('active');

    // show the elements containing class .active
    $('.active').show();
  });
});