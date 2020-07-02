const svgPath = () => {
    drawPath1();
    drawPath2();
};

function drawPath1(){
    let draw = SVG().addTo(".svg-border");
    let path = draw
        .viewbox("0,0,275,305")
        .attr("preserveAspectRatio", "none")
        .path("m30,0H275V305H30L30,180L0,145L30,110Z")
        .fill("none")
        .stroke({ width: 3, color: "rgba(255,255,255,0.2)" });
}
function drawPath2(){
    let draw = SVG().addTo(".svg-border2");
    let path = draw
        .viewbox("0,0,430,182")
        .attr("preserveAspectRatio", "none")
        .path("m30,0H430V182H30L30,115L0,86L30,57Z")
        .fill("none")
        .stroke({ width: 3, color: "rgba(255,255,255,0.2)" });
}

export default svgPath;