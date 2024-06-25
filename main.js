function preload() {
}

function setup() {
    canvas = createCanvas(760, 520);
    canvas.position(650, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    fill(0, 0, 128);
    stroke(0, 0, 128);
    rect(90, 70, 390, 30);
    rect(90, 340, 390, 30);
    rect(70, 90, 30, 260);
    rect(470, 90, 30, 260);

    image(video, 90, 90, 390, 260);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(80, 80, 70);
    circle(480, 350, 70);
    circle(80, 350, 70);
    circle(480, 80, 70);
}

function take_snapshot() {
    save('student_name.png');
}

