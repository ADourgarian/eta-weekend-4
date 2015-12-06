/**
 * Created by AVALON on 12/4/15.
 */
function createDocument(array){
  return [{
    personal: {
      fName: array[0].value,
      lName: array[1].value,
      dJob: array[2].value,
      dLocation: {
        remote: $('#dLocation').val,
        dCity: array[3].value,
        dState: array[4].value
      }
    },
    employmentHistory: {
      job1: {
        title: array[5].value,
        employer: array[6].value,
        city: array[7].value,
        state: array[8].value,
        description: array[9].value
      },
      job2: {
        title: array[10].value,
        employer: array[11].value,
        city: array[12].value,
        state: array[13].value,
        description: array[14].value
      },
      job3: {
        title: array[15].value,
        employer: array[16].value,
        city: array[17].value,
        state: array[18].value,
        description: array[19].value
      }
    },
    skills: array[20].value
  }];
}
$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
  //  var Applicant = $(this).serializeArray();
    var Applicant = createDocument($(this).serializeArray());
    console.log(Applicant);
    $.ajax({
      url: "/users",
      type: 'post',
      data: JSON.stringify({"application":Applicant}),
      contentType: "application/json; charset=utf-8"
    }).done(function(){alert('successfully submitted')})
  });
});