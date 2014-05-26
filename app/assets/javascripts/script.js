$(function() {
    new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );

    var lastId,
    menu = $("#menu"),
    menuHeight = menu.outerHeight()+15,
    // All list items
    menuItems = menu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 450) {
            $(".navbar").addClass("affix");
        }
        if (scroll < 450) {
            $(".navbar").removeClass("affix");
        }

       var fromTop = $(this).scrollTop()+menuHeight;
   
       // Get the current id of current scroll item
       var current = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the current id of the current menu
       current = current[current.length-1];
       var currentid = current && current.length ? current[0].id : "";
       
       if (lastId !== currentid) {
           lastId = currentid;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+currentid+"]").parent().addClass("active");
           }                   
        });
 });