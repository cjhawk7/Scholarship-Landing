// calendar for new scholarship page
var applyDate = document.getElementsByClassName('field-last-day-to-apply')[0]
  .innerText
var recipientsDate = document.getElementsByClassName(
  'field-recipients-notified',
)[0].innerText
// removing the year from the date on calendar and appending
function removeYear(date1, date2) {
  date1 = date1.split(' ')
  date2 = date2.split(' ')
  var dateNumber1 = "<p class='cal-num'>" + date1[1] + '</p>'
  var dateNumber2 = "<p class='cal-num'>" + date2[1] + '</p>'
  var dateNumber3 = "<p class='cal-num-apply'>" + date2[1] + '</p>'
  var newDate1 = date1.slice(0, 1).join(' ')
  var newDate2 = date2.slice(0, 1).join(' ')
  $('.date-box').append(
    '<p class="date-month">' + newDate1 + '</p>' + dateNumber1,
  )
  $('.notified-box').append(
    '<p class="date-month">' + newDate2 + '</p>' + dateNumber2,
  )
  $('.notified-date').append(
    '<p class="date-month-two">' + newDate2 + ' </p>' + dateNumber3,
  )
}
removeYear(applyDate, recipientsDate)
