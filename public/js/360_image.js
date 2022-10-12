let PanoViewer = require('@egjs/view360');

const panoViewer = new PanoViewer.PanoViewer(
  document.getElementById("pano"),
  {
    image: "http://spaceliberty.test/assets/site-images/peter_house_360.jpg",
    height: window.innerWidth > 767 ? 800 : 651,
    useZoom: false,
    touchDirection: PanoViewer.PanoViewer.TOUCH_DIRECTION.YAW
  }
);

window.addEventListener("resize", function() {
  panoViewer.updateViewportDimensions();
  if (window.innerWidth > 767 && panoViewer.getTouchDirection() === PanoViewer.PanoViewer.TOUCH_DIRECTION.YAW) {
    panoViewer.setTouchDirection(PanoViewer.PanoViewer.TOUCH_DIRECTION.ALL);
  } else if (window.innerWidth <= 767 && panoViewer.getTouchDirection() === PanoViewer.PanoViewer.TOUCH_DIRECTION.ALL) {
    panoViewer.setTouchDirection(PanoViewer.PanoViewer.TOUCH_DIRECTION.YAW);
  }
});
