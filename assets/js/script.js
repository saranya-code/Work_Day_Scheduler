//Function starts here

$(document).ready (function() {

    var currentdate = moment().format('MMM Do YYYY');
    $(currentDay).text(currentdate);

    var currentTime = moment().hour();     // Getting current time
    var timeBlockEl = $('.time-block')     

    $.each(timeBlockEl,function(index, value){
        var timeBlockId = $(value).attr("id");     //display all time block id

        if(currentTime > timeBlockId){          //19>8
            $(value).addClass("past").remove("future present");    // Past displays in grey 
        // $(value).remove("future present")

        } else if (currentTime < timeBlockId){   //19 < 8
            $(value).addClass("future").remove("past present");    // Future displays in green
        }
        else{
            $(value).addClass("present").remove("future past");    // Present displays in red
        }
    });


    //Save button  event listener
    $(".saveBtn").on("click" , function(){
        var descriptionValue = $(this).siblings('.description').val();   // Getting textarea
        var descriptionName = $(this).parent().attr('id')     // Getting parent id
        // console.log(description)
        localStorage.setItem( descriptionName, descriptionValue)
    });


    // Get items store in textarea
    $('#planner-8').val(localStorage.getItem("8"));
    $('#planner-9').val(localStorage.getItem("9"));
    $('#planner-10').val(localStorage.getItem("10"));
    $('#planner-11').val(localStorage.getItem("11"));
    $('#planner-12').val(localStorage.getItem("12"));
    $('#planner-13').val(localStorage.getItem("13"));
    $('#planner-14').val(localStorage.getItem("14"));
    $('#planner-15').val(localStorage.getItem("15"));
    $('#planner-16').val(localStorage.getItem("16"));
    $('#planner-17').val(localStorage.getItem("17"));

});

