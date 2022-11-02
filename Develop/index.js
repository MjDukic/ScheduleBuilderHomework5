$(document).ready(function () {

//to get the current time
 function timeBlocker() {
    //used moment.js to help get the current hour format
    var currentTime = moment().hours();

    $('.time-block').each(function () {
     //var n = parseInt($(this).attr('id').match(/link-(\d+)/)[1], 10); ex to help the # we are looking for
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

//need .savBtn .click so that the schedule inputed actually gets saved when reloaded
$(".saveBtn").click(function (){
    //storing data(setItem) in local storage
    var timeKey = $(this).parent().attr('id');
    var descriptionValue = $(this).siblings('.schedule').val();

    localStorage.setItem(timeKey, descriptionValue);
})

//saving/retrieving(getItem) descriptions into the local storage
$('#hour-9 .schedule').val(localStorage.getItem('hour-9'));
$('#hour-10 .schedule').val(localStorage.getItem('hour-10'));
$('#hour-11 .schedule').val(localStorage.getItem('hour-11'));
$('#hour-12 .schedule').val(localStorage.getItem('hour-12'));
$('#hour-13 .schedule').val(localStorage.getItem('hour-13'));
$('#hour-14 .schedule').val(localStorage.getItem('hour-14'));
$('#hour-15 .schedule').val(localStorage.getItem('hour-15'));
$('#hour-16 .schedule').val(localStorage.getItem('hour-16'));
$('#hour-17 .schedule').val(localStorage.getItem('hour-17'));


    //current day presented and .text needed so that it shows on page, ref #25-Ins_moment in textbook
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

});
