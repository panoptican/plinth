/* The custom jScrollPane reading pane is part of the desktop design only.
   Below the fluid breakpoint (see "Responsive" in css/grid.css) the pane is
   released into normal document flow, so the plugin is never attached there
   and is torn down if the window is resized across the breakpoint. */
$(function () {
  var desktop = window.matchMedia('(min-width: 1251px)');

  function sync() {
    $('.scroll-pane').each(function () {
      var api = $(this).data('jsp');
      if (desktop.matches && !api) {
        $(this).jScrollPane({
          autoReinitialise: true,
          hideFocus: true
        });
      } else if (!desktop.matches && api) {
        api.destroy();
      }
    });
  }

  sync();
  if (desktop.addEventListener) {
    desktop.addEventListener('change', sync);
  } else {
    desktop.addListener(sync); // Safari < 14
  }
});
