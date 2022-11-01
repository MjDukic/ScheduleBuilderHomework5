$(document).ready(function () {

//to get the current time
  function timeBlocker() {
    var currentTime = moment().hours();

    $('.time-block').each(function () {
     //var n = parseInt($(this).attr('id').match(/link-(\d+)/)[1], 10); ex to help the number we are looking for
      var blockTime = parseInt($(this).attr('id').split('-')[1]);
        //if statements to identify red green or grey
      if (blockTime === currentTime) {
        $(this).addClass('present');
      } else if (blockTime < currentTime) {
        $(this).removeClass('present');
        $(this).addClass('past');
      } else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }
    });
  }

  timeBlocker();

     //current day presented and .text needed so that it shows on page
     $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

});
