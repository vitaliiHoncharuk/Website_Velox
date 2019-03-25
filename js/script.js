$(document).ready(function(){
	$('.portfolio_nav ul li a').click(function(){
		var parent = $(this).parent();
        siblings = parent.siblings(),
        isOn = parent.toggleClass('current_portfolio__classItem').hasClass('current_portfolio__classItem');

    siblings.toggleClass('current_portfolio__classItem', !isOn);
});
});