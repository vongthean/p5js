let snowContainer;

function setup () {
    createCanvas(600, 400);  // Tạo canvas tổng thể, nhưng container sẽ chỉ hoạt động trong một vùng cụ thể
    snowContainer = new SnowContainer(100, 50, 400, 300);  // Container tùy chỉnh x, y, width, height
}

function draw () {
    background(0);  // Làm mới màn hình nền đen

    // Cập nhật và hiển thị tuyết trong container
    snowContainer.update();
    snowContainer.display();
}

// Lớp SnowContainer để điều chỉnh vùng tuyết rơi
class SnowContainer {
    constructor(x, y, w, h) {
        this.x = x;    // Vị trí x của container
        this.y = y;    // Vị trí y của container
        this.w = w;    // Chiều rộng của container
        this.h = h;    // Chiều cao của container
        this.snowflakes = [];  // Mảng chứa các hạt tuyết
    }

    // Cập nhật các hạt tuyết
    update () {
        let t = frameCount / 60;  // Thời gian trôi qua tính bằng giây

        // Tạo hạt tuyết mới mỗi khung hình
        for (let i = 0; i < random(2); i++) {
            this.snowflakes.push(new Snowflake(this.x, this.y, this.w, this.h));  // Thêm hạt tuyết mới
        }

        // Cập nhật vị trí các hạt tuyết
        for (let flake of this.snowflakes) {
            flake.update(t);
        }
    }

    // Vẽ các hạt tuyết
    display () {
        push();  // Lưu trạng thái trước khi dịch chuyển hệ tọa độ

        // Giới hạn vẽ trong vùng container
        translate(this.x, this.y);
        for (let flake of this.snowflakes) {
            flake.display();
        }

        pop();  // Khôi phục hệ tọa độ gốc
    }
}

// Lớp hạt tuyết
class Snowflake {
    constructor(x, y, w, h) {
        this.posX = random(w);  // Vị trí ngang ngẫu nhiên trong container
        this.posY = random(-50, 0);  // Vị trí dọc ngẫu nhiên từ trên container
        this.size = random(2, 5);  // Kích thước hạt tuyết
        this.speed = random(1, 3);  // Tốc độ rơi ngẫu nhiên
        this.angle = random(TWO_PI);  // Góc quay ngẫu nhiên
        this.dir = random(0.01, 0.05);  // Tốc độ quay nhẹ
        this.w = w;  // Chiều rộng container
        this.h = h;  // Chiều cao container
    }

    // Cập nhật vị trí của hạt tuyết
    update () {
        this.angle += this.dir;  // Quay nhẹ
        this.posY += this.speed;  // Rơi xuống
        this.posX += sin(this.angle);  // Hiệu ứng lắc lư

        // Nếu hạt tuyết ra khỏi container, đặt lại ở trên cùng
        if (this.posY > this.h) {
            this.posY = random(-50, 0);
            this.posX = random(this.w);
        }
    }

    // Vẽ hạt tuyết
    display () {
        ellipse(this.posX, this.posY, this.size);  // Vẽ hình tròn đại diện cho hạt tuyết
    }
}
