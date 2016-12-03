// Search function that enables users to search every time they type in a letter in the search bar.
$('#search').keyup(function (e) {
    var inp = $('#search').val();
    var keyword = inp.toLowerCase();
    if (keyword == "") {
      $(".tile").show();
    } else {
      $(".tools").each( function() {
        var s = $(this).text();
        var tool = s.toLowerCase();
        if (tool.indexOf(keyword)!=-1) {
          console.log(keyword);
          $(this).parent().parent().show();
        }
        else {
          $(this).parent().parent().hide();
        }
      });
    }
});

// Here enables users to check/uncheck the filters in the filter section in the "All" page.
$(".filter").click(function() {
  var image = this.childNodes[1];
  if (this.className == "filter_uncheck") {
    image.src = "images/check.png";
    this.className = "filter";
    console.log(this.className);
  } else {
    image.src = "images/cancel.png";
    this.className = "filter_uncheck";
    console.log(this.className);
  }
});

// When users want to search on other pages, this function guide them back to the "All" page to do the search.
$('#search-redirect').click( function() {
  window.location="/all.html";
  $(this).focus();
});

// This funtion makes sure that whenever users' mouse enter a selector in "Which" page, the dropdown menu will be activated.
$(".selector").mouseenter( function(){
    var dropdown = this.childNodes[1];
    var drop = dropdown.childNodes[1];
    var menu = this.childNodes[7];
    var category = this.childNodes[5];
    $(category).hide();
    $(menu).show();
    $(drop).rotate({
      angle: 0,
      animateTo:180
      })
    });

// This one makes sure that whenever users' mouse leave a selection area, the dropdown menu will be hidden.
$(".selector").mouseleave( function(){
    var menu = this.childNodes[7];
    var dropdown = this.childNodes[1];
    var drop = dropdown.childNodes[1];
    var category = this.childNodes[5];
    $(category).show();
    $(menu).hide();
    $(drop).rotate({
      angle: 180,
      animateTo:360
      })
    });

// Here the funtion identifies the options users have chosen in the "which" page, and makes sure picture will appear corresponding to the selected items.
$(".menu-item").click( function(){
  var menuItems = this.parentElement;
  var menu = menuItems.parentElement;
  var selector = menu.parentElement;
  var dropdown = selector.childNodes[1];
  var title = dropdown.childNodes[0];
  var drop = dropdown.childNodes[1];
  var newTitle = this.childNodes[0];
  var category = selector.childNodes[5];
  title.nodeValue = newTitle.nodeValue;
  
  $(category).show();
  $(menu).hide();
  $(drop).rotate({
      angle: 180,
      animateTo:360
    })
  
  var id = this.id;
  if (id == "mobile") {
    var image = category.childNodes[1];
    image.src = "images/mobile.png";
  }
  else if (id == "desktop") {
    var image = category.childNodes[1];
    image.src = "images/desktop.png";
  }
  else if (id == "vr") {
    var image = category.childNodes[1];
    image.src = "images/vr.png";
  }
  else if (id == "multiple") {
    var image = category.childNodes[1];
    image.src = "images/multiple.png";
  }
  else if (id == "transitions") {
    var image = category.childNodes[1];
    image.src = "images/transitions.png";
  }
  else if (id == "animations") {
    var image = category.childNodes[1];
    image.src = "images/animations.png";
  }
  else if (id == "info") {
    var image = category.childNodes[1];
    image.src = "images/info.png";
  }
  else if (id == "all") {
    var image = category.childNodes[1];
    image.src = "images/all.png";
  }
  else if (id == "screens") {
    var image = category.childNodes[1];
    image.src = "images/screens.png";
  }
  else if (id == "videos") {
    var image = category.childNodes[1];
    image.src = "images/videos.png";
  }
  else if (id == "clickable") {
    var image = category.childNodes[1];
    image.src = "images/clickable.png";
  }
  else if (id == "testable") {
    var image = category.childNodes[1];
    image.src = "images/testable.png";
  }
});