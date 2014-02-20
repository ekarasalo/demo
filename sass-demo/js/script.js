$(document).ready(function() {

   	$('.navlist li').click(function(event) {
	    $('.navlist li').removeClass('active');
	    $(this).addClass('active');
	 });
});