$(document).ready(function(){
  $("#remove").click(function(){
    $("#del-cart").remove();
  });
  $("#remove-2").click(function(){
    $("#del-cart-2").remove();
  });
  $("#remove-3").click(function(){
    $("#del-cart-3").remove();
  });
  $("#remove-4").click(function(){
    $("#del-cart-4").remove();
  });

  //mul-option
  $("#select-mul").change(function(){
  	let opVal = $("#select-mul").val()*40;
  $("#equal").html(opVal);
  });
  
  $("#select-mul-2").change(function(){
  	let opVal2 = $("#select-mul-2").val()*49;
  $("#equal-2").html(opVal2);
  });

  $("#select-mul-3").change(function(){
  	let opVal3 = $("#select-mul-3").val()*40;
  $("#equal-3").html(opVal3);
  });

  $("#select-mul-4").change(function(){
  	let opVal4 = $("#select-mul-4").val()*40;
  $("#equal-4").html(opVal4);
  });



//countdown
	setInterval(function(){
    let s = $('.seconds').text()*1 //lấy ra giá trị ô giây và ép thành number
    let m = $('.minutes').text()*1
    let h = $('.hours').text()*1
    if(s>0)
    $('.seconds').text(s-1); //cứ mỗi lần giá trị lớn hơn 0 sẽ set giá trị mới -1
	else{
		s=59;
		$('.seconds').text(s-1);
	
		$('.minutes').text(m-1);
		if(m<=0){
			m=59;
			$('.minutes').text(s-1);
			$('.hours').text(m-1);
		}
	}




	},2000);
	
            
         
  //toggle

   $("#check").click(function(){
    $(".different-address").toggle();
  });  


});