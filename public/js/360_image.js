let PanoViewer = require('@egjs/view360')
const panoViewer = new PanoViewer.PanoViewer(
    document.getElementById("pano"),
    {
        image: "https://nftrelicart.com/assets/site-images/360_panorama-optimize-4k.jpg",
        height: 800,
        useZoom: false,
    }
);

window.addEventListener("resize", function() {
    panoViewer.updateViewportDimensions();
});
