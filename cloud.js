let clouds = [];  // Mảng chứa các đám mây
let cloudImg;     // Biến để lưu trữ hình ảnh đám mây

function preload () {
    cloudImg = loadImage('your-cloud-image-url.png');  // Thay bằng đường dẫn ảnh đám mây của bạn
}

function setup () {
    createCanvas(800, 400);

    // Tạo các đám mây với vị trí và tốc độ khác nhau
    for (let i = 0; i < 5; i++) {
        clouds.push(new Cloud(random(width), random(height / 2), random(0.5, 1.5), random(0.5, 2)));
    }
}

function draw () {
    background(135, 206, 235);  // Nền trời xanh nhạt

    // Hiển thị và cập nhật tất cả các đám mây
    for (let cloud of clouds) {
        cloud.update();
        cloud.display();
    }
}

// Lớp Cloud đại diện cho một đám mây
class Cloud {
    constructor(x, y, scale, speed) {
        this.x = x;     // Vị trí ban đầu theo trục X
        this.y = y;     // Vị trí ban đầu theo trục Y
        this.scale = scale;  // Hệ số phóng to thu nhỏ cho đám mây
        this.speed = speed;  // Tốc độ chuyển động ngang của đám mây
        this.yOffset = random(100);  // Độ lệch cho dao động bồng bềnh
    }

    // Cập nhật vị trí của đám mây
    update () {
        // Tạo hiệu ứng bồng bềnh lên xuống với hàm sin()
        this.y += sin(frameCount * 0.05 + this.yOffset) * 0.5;

        // Chuyển động ngang của đám mây
        this.x += this.speed;

        // Khi đám mây đi ra khỏi màn hình, đưa nó trở lại từ bên trái
        if (this.x > width + cloudImg.width * this.scale) {
            this.x = -cloudImg.width * this.scale;
        }
    }

    // Hiển thị đám mây
    display () {
        imageMode(CENTER);  // Căn giữa hình ảnh
        image(cloudImg, this.x, this.y, cloudImg.width * this.scale, cloudImg.height * this.scale);
    }
}
