$(function() {
  $('section').draggable();
  $('section').focusable({
    blur: function() { $(this).css('background', 'rgba(253, 251, 249, 0.7)'); },
    focus: function() { $(this).css('background', 'rgba(253, 251, 249, 1)'); }
  });
  $('section').resizable();
  $('section').controllable();

  window.setInterval(function() {
    var m = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var d = new Date();
    var time = (d.getHours() % 12) + (d.getSeconds() % 2 ? ':' : ' ') + d.getMinutes() + (d.getHours() < 13 ? 'AM' : 'PM');
    $('aside time').text(time);
    $('aside date .month').text(m[d.getMonth()]);
    $('aside date .year').text(d.getFullYear());
    $('.day').text(d.getDay());
  }, 100);

  $('body > div > nav').slideToggle();
  $('body > div > aside').slideToggle();

  // Bottom Links
  $("a[href='#internet']").click(function () {
    $('section.internet').show();
    $('section.internet').mousedown();
  });
  $("a[href='#explorer']").click(function () {
    $('section.explorer').show();
    $('section.explorer').mousedown();
  });
  $("a[href='#skype']").click(function () {
    $('section.skype').show();
    $('section.skype').mousedown();
  });

  // Load images from Flickr
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", { format: "json" }, function(data) {
    $.each(data.items, function(i, item) {
      var span = $("<span/>");
      $("<img/>").attr("src", item.media.m).appendTo(span);
      span.appendTo("section.explorer article");
    });
  });
});
