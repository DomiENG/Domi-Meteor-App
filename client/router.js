Router.configure({ 
	layoutTemplate: 'layout'
});


Router.map(function(){
	this.route('home', {path:'/'});
	//this.route('about', {path:'/about'})
	this.route('signup', {path:'/signup'});
});

/*$('#buttonJQ').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, '#about') ).offset().top
    }, 500);
    return false;
});
*/