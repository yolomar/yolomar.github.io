var hours =0;
var mins =0;
var seconds =0;
var maxID = 0;

$('#start').click(function(){
      startTimer();
});

function getTemplateRow() {
      var x = document.getElementById("templateRow").cloneNode(true);
      x.id = "";
      x.style.display = "";
      x.innerHTML = x.innerHTML.replace(/{id}/, ++maxID);
      return x;
}

$('#stop').click(function(){
      var t = document.getElementById("timing-table");
      console.log(t);
      var rows = t.getElementsByTagName("tr");
      var r = rows[rows.length - 1];
      alert(hours + ":" + minutes + ":" + seconds);
      r.parentNode.insertAfter(getTemplateRow(), r);
      clearTimeout(timex);
});

$('#reset').click(function(){
      hours =0;      mins =0;      seconds =0;
  $('#hours','#mins').html('00:');
  $('#seconds').html('00');
});

function startTimer(){
  timex = setTimeout(function(){
      seconds++;
    if(seconds >59){seconds=0;mins++;
       if(mins>59) {
       mins=0;hours++;
         if(hours <10) {$("#hours").text('0'+hours+':')} else $("#hours").text(hours+':');
        }
                       
    if(mins<10){                     
      $("#mins").text('0'+mins+':');}       
       else $("#mins").text(mins+':');
                   }    
    if(seconds <10) {
      $("#seconds").text('0'+seconds);} else {
      $("#seconds").text(seconds);
      }
     
    
      startTimer();
  },1000);
}


