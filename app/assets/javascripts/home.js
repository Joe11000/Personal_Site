

var image_slide_show = [
                         "http://i884.photobucket.com/albums/ac41/jgnoonan27/1_zpse7b88fbb.jpg",
                         "http://i884.photobucket.com/albums/ac41/jgnoonan27/2_zps4ee3cb13.jpg",
                         "http://i884.photobucket.com/albums/ac41/jgnoonan27/3_zps33a18981.jpg"
                       ]

$(function () {
  $('[id*=tab]').hide();
  $('#tab1').addClass('active');
  $('.active').show();
  $('li').on('click', function(event){
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


$(function () {

  var index = 0;
  window.setInterval(function(e)
  {
    var image;
    switch(++index % 3)
    {
      case  0 : image = image_slide_show[0]; break;
      case  1 : image = image_slide_show[1]; break;
      default : image = image_slide_show[2];
    }

   $("#my_pic").fadeTo(400, .75,function(){
    $("#my_pic").load(function () { //avoiding blinking, wait until loaded
        $("#my_pic").fadeTo(700, 1,function(){});
    });
    $("#my_pic").attr("src", image);
});

  }, 14000);
  });



var progressbar_val = 15;


    $( "#progressbar" ).progressbar({
      value: progressbar_val
    });


    $( ".percentage_complete" ).html(progressbar_val + "%")



});
