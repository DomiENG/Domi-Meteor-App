Template.navbar.events({
    'click .teamJQ': function() {
            //calculate destination place
            var dest = 0;
            if ($('#team').offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $('#team').offset().top;
            
            //go to destination
            $('body').animate({
                scrollTop: dest
            }, 1000, 'swing');
            hashTagActive = '#team';
            };
        },

    'click .orderJQ': function() {
            //calculate destination place
            var dest = 0;
            if ($('#portfolio').offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $('#portfolio').offset().top;
            
            //go to destination
            $('body').animate({
                scrollTop: dest
            }, 1000, 'swing');
            hashTagActive = '#portfolio';
            };
        },
        
        'click .aboutJQ': function() {
            //calculate destination place
            var dest = 0;
            if ($('#about').offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $('#about').offset().top;
            
            //go to destination
            $('body').animate({
                scrollTop: dest
            }, 1000, 'swing');
            hashTagActive = '#about';
            };
        }
    });