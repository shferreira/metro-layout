(function() {
  /*
   * Drag and drop windows
   */
  $.fn.draggable = function(opt) {
    var dragging = false;
    $(this).mousedown(function(e) {
      dragging = { element: $(this), x: e.offsetX, y: e.offsetY };
      opt && opt.drag_start && opt.drag_start.call(this);
    });
    $(document).mousemove(function(e) {
      if (dragging) {
        x = Math.min(Math.max(e.clientX - dragging.x, 0), $(document).width() - dragging.element.width());
        y = Math.min(Math.max(e.clientY - dragging.y, 0), $(document).height() - dragging.element.height() - 50);
        dragging.element.offset({ left: x, top: y });
        opt && opt.drag_start && opt.drag.call(dragging);
      }
    });
    $(document).mouseup(function(e) {
      dragging = false;
      opt && opt.drag_start && opt.drag_start.call(dragging);
    });
  };

  /*
   * Focus and z-order
   */
  $.fn.focusable = function(opt) {
    var group = $(this);
    $(this).mousedown(function() {
      var bigger = 0;
      group.each(function() {
        bigger = Math.max(parseInt($(this).css("z-index"), 10), bigger);
        opt && opt.blur && opt.blur.call(this);
      });
      $(this).css('z-index', bigger + 1);
      opt && opt.focus && opt.focus.call(this);
    });
  };

  /*
   * Corner resizing
   */
  $.fn.resizable = function() {

  };

  /*
   * Minimize, maximize and close
   */
  $.fn.controllable = function() {
    $(this).each(function() {
      var current = $(this);
      current.find('a.close').click(function() {
        current.hide();
      });
    });
  };
})(jQuery);
