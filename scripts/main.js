$(document).ready(function(){
	$(".mobile-icon").click(function(){
		console.log("click");
		var submenu = $(this).parents("nav.menu").children('ul:nth-child(2)');
		if(submenu.hasClass('open')) submenu.hide().removeClass('open');
		else{
			$("nav.menu ul.open").hide().removeClass('open');
			submenu.show().addClass('open');
		}
	});
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 1,
	    nav:true,
			autoplay:true,
			autoplayTimeout: 10000,
			autoplayHoverPause:true	,
			dots: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']  
	})
	$(".registration").click(function(event) {
			$.fancybox.open({
				src  : '#modal',
				type : 'inline',
				scrolling : 'no'
			});				
	});		
	$("input[type=file]").change(function() {
    if ($(this).val().lastIndexOf('\\')){
        var i = $(this).val().lastIndexOf('\\')+1;
    }
    else{
        var i = $(this).val().lastIndexOf('/')+1;
    }
    var val = $(this).val().slice(i);
    if(val) $("span.file").text(val);
    else $("span.file").text("Добавить аватар (по желанию)");
	});
	var	messages = {
			'name': 'Пожалуйста введите свое имя',
			'email': "Пожалуйста введите свой e-mail",
			'comment': "Пожалуйста введите текст комментария",
			'password': 'Пожалуйста введите пароль',
			'confirm_password': 'Пожалуйста повторите введенный пароль'
		}
		$("#mailing-1").validate({
			'messages' : messages,
		});		
		$("#mailing-2").validate({
			'messages' : messages,
		});	
		$("#comment").validate({
			'messages' : messages,
		});	
		$("#reg").validate({
			rules: {
				password: {
					minlength: 5
				},
				confirm_password: {
					minlength: 5,
					equalTo: "#password"
				}
			},
			'messages' : messages,
		});				
});