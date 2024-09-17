let amplitude = 50;  // Biên độ của sóng (độ cao của sóng)
let frequency = 0.05; // Tần số của sóng (số chu kỳ trên đơn vị thời gian)
let waveSpeed = 2;   // Tốc độ di chuyển của sóng
let phase = 0;       // Pha của sóng (giúp sóng chuyển động)

function setup () {
    createCanvas(800, 400);
}

function draw () {
    background(220);

    stroke(0);   // Màu đường sóng
    strokeWeight(2);
    noFill();    // Không có màu nền

    beginShape();

    for (let x = 0; x < width; x++) {
        let y = height / 2 + sin(x * frequency + phase) * amplitude;
        vertex(x, y);  // Vẽ các đỉnh của đường sóng
    }

    endShape();

    phase += waveSpeed * 0.01;  // Tạo chuyển động của sóng bằng cách thay đổi pha
}
