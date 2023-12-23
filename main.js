var status = "";
var objects = [];
function preload() {

}

function setup() {

    canvas = createCanvas(1500, 700);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(1500, 700);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", nombre);
    document.getElementById("status").innerHTML = "archivo";
}
function nombre() {
    console.log("arsivo");
    status = true;
}
function ultfunción(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}
function draw() {
    image(video, 0, 0, 1500, 700);
    if (status != "") 
    {   
        objectDetector.detect(video, ultfunción);
        for (var ol = 0; ol < objects.length; ol++)

        {
            fill("red");
            var porcent = floor(objects[ol].confidence * 100);
            text(objects[ol].label + " " + porcent + "%", objects[ol].x + 10, objects[ol].y + 15);
            noFill();
            stroke(255, 0, 0);
            rect(objects[ol].x, objects[ol].y, objects[ol].width, objects[ol].height);
        }
    }
}