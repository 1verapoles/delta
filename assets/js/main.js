$(document).ready(function() {
var section1 = $(".section1");		
var section2 = $(".section2");	
var section3 = $(".section3");
var section4 = $(".section4");
var section5 = $(".section5");
var section6 = $(".section6");
var section7 = $(".section7");
var section8 = $(".section8");
var section9 = $(".section9");
var year = new Date().getFullYear();	
var hei = $(window).innerHeight(); 
var hei2 = hei * 2; 
var hei3 = hei * 3; 
var hei4 = hei * 4; 
var hei5 = hei * 5; 
var hei6 = hei * 6; 
var hei7 = hei * 7; 
//var data1, data2, data3, data4, data5, data6, data7;
//console.log(hei2);
$(".inner__btn").on("click", function(){
 var selec = $(".inner__select").val();
  if (selec === "") {alert("Выберите марку вашего автомобиля!");}	
  if (!section2.is(".visible") && selec) {section2.addClass("visible"); $(window).scrollTop(hei);}
});

$(".section2__btn").on("click", function(){
	var sect2inp = $(".section2__input").val();
	if (sect2inp === "") {alert("Выберите год выпуска автомобиля!");}	
  if (!section3.is(".visible") && sect2inp) {section3.addClass("visible"); $(window).scrollTop(hei2);}
});

$(".section2__minus").on("click", function(){
	var val2 = +$(".section2__input").val();
	if (val2 > 0) {$(".section2__input").val(val2-1);}
});

$(".section2__plus").on("click", function(){
	var val2 = +$(".section2__input").val();
	if (val2 < year) {$(".section2__input").val(val2+1);}
});

$(".section3__btn").on("click", function(){
	var sect3check = $(".radio__r").is(":checked");
	if (!sect3check) {alert("Выберите ориентировочную стоимость автомобиля!");}	
  if (!section4.is(".visible") && sect3check) {section4.addClass("visible"); $(window).scrollTop(hei3);}
});

$(".section4__btn").on("click", function(){
	var sect4inp = $(".section4__input").val();
	if (sect4inp === "") {alert("Укажите стаж вождения!");}	
  if (!section5.is(".visible") && sect4inp) {section5.addClass("visible"); $(window).scrollTop(hei4);}
});

$(".section4__minus").on("click", function(){
	var val2 = +$(".section4__input").val();
	if (val2 > 0) {$(".section4__input").val(val2-1);}
});

$(".section4__plus").on("click", function(){
	var val2 = +$(".section4__input").val();
	if (val2 < 120) {$(".section4__input").val(val2+1);}
});

$(".section5__btn").on("click", function(){
	var sect5check = $(".radio__r2").is(":checked");
	if (!sect5check) {alert("Укажите, нужна ли дополнительная страховка от угона!");}	
  if (!section6.is(".visible") && sect5check) {section6.addClass("visible"); $(window).scrollTop(hei5);}
});

$(".section6__btn").on("click", function(){
	var sect6check = $(".radio__r3").is(":checked");
	if (!sect6check) {alert("Выберите количество водителей автомобиля!");}	
  if (!section7.is(".visible") && sect6check) {section7.addClass("visible"); $(window).scrollTop(hei6);}
});

$(".section7__btn").on("click", function(){
	var sect7check = $(".radio__r4").is(":checked");
	if (!sect7check) {alert("Укажите, нужно ли действие КАСКО за границей!");}	
  if (!section8.is(".visible") && sect7check) {section8.addClass("visible"); $(window).scrollTop(hei7);}
});

  $(".form1").validate({
                rules: {
                    name1: {
                        required: true,
                        minlength: 2
                    },
                    phone1: {
                        required: true
                    }
                },
                messages: {
                    name1: {
                        required: "Заполните это поле, пожалуйста!",
                        minlength: "Длина этого поля должна быть более 2 символов!"
                    },
                    phone1: {
                        required: "Заполните это поле, пожалуйста!"
                    }
                },
                submitHandler: function (form) {
                    var th = $(form);
		$.ajax({
			type: "POST",
			url: th.attr("action"), 
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				th.trigger("reset");
			}, 2000);
			  section1.addClass("hide");
			  if (!section9.is(".visible")) {section9.addClass("visible");}
			  if (section1.is(".visible")) {section1.removeClass("visible");}
			  if (section2.is(".visible")) {section2.removeClass("visible");}
			  if (section3.is(".visible")) {section3.removeClass("visible");}
			  if (section4.is(".visible")) {section4.removeClass("visible");}
			  if (section5.is(".visible")) {section5.removeClass("visible");}
			  if (section6.is(".visible")) {section6.removeClass("visible");}
			  if (section7.is(".visible")) {section7.removeClass("visible");}
			  if (section8.is(".visible")) {section8.removeClass("visible");}
		});
		return false;
                        }
        });


});     

    