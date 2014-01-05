
var canvas = $("#canvas").get(0).getContext("2d");
$("#reset").click(function(){
    canvas.clearRect(0,0,300,300);
});
$("#square").click(function(){
    canvas.fillStyle = "rgb(255,0,0)";
    canvas.fillRect(50,50,200,200);
    canvas.fillStyle = "rgba(0,0,255,0.5)";
    canvas.fillRect(100,100,200,200);
});


