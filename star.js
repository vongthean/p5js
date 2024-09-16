let stars = [];  // Mảng chứa các ngôi sao
let numStars = 5;  // Số lượng ngôi sao

function setup () {
    createCanvas(600, 400);
    angleMode(DEGREES);  // Sử dụng độ thay vì radians

    // Tạo các ngôi sao với vị trí và góc độ ngẫu nhiên
    for (let i = 0; i < numStars; i++) {
        let x = random(width);  // Vị trí ngẫu nhiên x
        let y = random(height); // Vị trí ngẫu nhiên y
        let angle = random(360);  // Góc ngẫu nhiên (0 đến 360 độ)
        stars.push(new Star(x, y, angle));  // Thêm ngôi sao vào mảng
    }
}

function draw () {
    background(0);  // Nền đen

    // Hiển thị tất cả các ngôi sao
    for (let star of stars) {
        star.update();
        star.display();
    }
}

// Lớp Star đại diện cho mỗi ngôi sao
class Star {
    constructor(x, y, angle) {
        this.x = x;       // Vị trí x truyền vào
        this.y = y;       // Vị trí y truyền vào
        this.baseSize = random(20, 40);  // Kích thước cơ bản của ngôi sao
        this.angle = angle;  // Góc xoay của ngôi sao (độ)
        this.zoomSpeed = random(0.02, 0.05);  // Tốc độ zoom ngẫu nhiên
    }

    // Cập nhật hiệu ứng zoom in/zoom out
    update () {
        // Tạo hiệu ứng zoom lặp lại với sin(), dao động giữa -1 và 1
        this.size = this.baseSize + sin(frameCount * this.zoomSpeed * 360) * (this.baseSize / 2);
    }

    // Vẽ ngôi sao với góc độ và zoom
    display () {
        fill(255, 204, 0);  // Màu vàng
        noStroke();

        push();  // Lưu trạng thái trước khi dịch chuyển và xoay
        translate(this.x, this.y);  // Dịch chuyển hệ tọa độ đến vị trí ngôi sao
        rotate(this.angle);  // Xoay ngôi sao theo góc đã định (độ)
        this.drawStar(0, 0, this.size, this.size / 2, 5);  // Vẽ ngôi sao tại gốc tọa độ mới
        pop();  // Khôi phục hệ tọa độ ban đầu
    }

    // Hàm vẽ ngôi sao 5 cánh
    drawStar (x, y, radius1, radius2, npoints) {
        let angle = 360 / npoints;  // Góc giữa các đỉnh (độ)
        let halfAngle = angle / 2.0;   // Nửa góc

        beginShape();  // Bắt đầu vẽ hình
        for (let a = 0; a < 360; a += angle) {
            let sx = x + cos(a) * radius1;  // Tính tọa độ x của điểm ngoài
            let sy = y + sin(a) * radius1;  // Tính tọa độ y của điểm ngoài
            vertex(sx, sy);  // Đặt điểm ngoài
            sx = x + cos(a + halfAngle) * radius2;  // Tính tọa độ x của điểm trong
            sy = y + sin(a + halfAngle) * radius2;  // Đặt điểm trong
            vertex(sx, sy);  // Đặt điểm trong
        }
        endShape(CLOSE);  // Kết thúc vẽ hình
    }
}
