/**
 * Created by AVALON on 12/5/15.
 */
$(function(){
  $('.applicants').append('<tr>' +
    '<th class="col-sm-1">' + 'First Name' + '</th>' +
    '<th class="col-sm-1">' + 'Last Name' + '</th>' +
    '<th class="col-sm-1">' + 'Desired Location' + '</th>' +
    '<th class="col-sm-1">' + 'Last Employer' + '</th>' +
    '<th class="col-sm-1">' + 'Skills' + '</th>' +
    '<th class="col-sm-1">' + 'Remove' + '</th>' +
    '</tr>');
  $.ajax({
    url: "/users",
    type: "get"
  }).done(function (data) {
    console.log(data);
    for (var key in data){
      $('.applicants').append('<tr class=' + data[key]._id + '>' +
        '<td class="col-sm-1">' + data[key].applyFor.fName + '</td>' +
        '<td class="col-sm-1">' + data[key].applyFor.lName + '</td>' +
        '<td class="col-sm-1">' + data[key].applyFor.dLocation.dCity + ', ' + data[key].applyFor.dLocation.dState + '</td>' +
        '<td class="col-sm-1">' + data[key].employmentHistory.job1.employer + '</td>' +
        '<td class="col-sm-1">' + data[key].skills + '</td>' +
        '<td class="col-sm-1">' + '<button class="delete">' + 'Delete' + '</button>' + '</td>' +
        '</tr>')
    }
  });
  $('table').on('click', '.delete', function() {
    var rowClass = $(this).closest('tr').attr('class');
    var selector = $(this).closest('tr');
    console.log(selector);
    $.ajax({
      url:'/users',
      type:'delete',
      data: {_id: rowClass}
    }).done(function(){
      selector.remove();
    })
  })
});