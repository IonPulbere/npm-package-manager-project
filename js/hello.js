var $ = require('jquery');
$(function() {
  var myClass='actClass';
  // JQuery solution
  // $("li").click(function() {
  //   $('.actClass').removeClass(myClass);
  //   $(this).addClass(myClass);
  // });
  // JavaScript Solution
  var lis= document.querySelectorAll("li");
  for(var i=0;i<lis.length;i++){
    lis[i].addEventListener("click", function(){
     var curentclas=this.className;
     var clk=document.querySelectorAll(".actClass");
     for(var i=0;i<clk.length;i++){
       clk[i].className='';
     }
      this.className=myClass;
     });

  }
// window.alert("How are You?");
});//end
