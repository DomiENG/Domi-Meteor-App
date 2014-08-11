Router.configure({ 
	layoutTemplate: 'layout'
});


Router.map(function(){
	this.route('home', {path:'/'});
	this.route('signup', {path:'/signup'});
	this.route('features');
	this.route('starter');
	this.route('standard');
	this.route('plus');
	this.route('mhome');
});

//if ($(window).width() < 800) {
          // this.redirect('/mhome');
      //  }

