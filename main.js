/**
 * Bài 1
 */

function tongDiem() {
    var diemMon1 = document.getElementById("diem_1").value * 1;
    var diemMon2 = document.getElementById("diem_2").value * 1;
    var diemMon3 = document.getElementById("diem_3").value * 1;

    var tong = diemMon1 + diemMon2 + diemMon3;

    return tong;
}

function tinhDiem() {
    var diemKhuVuc = document.getElementById("khuVuc").value * 1;
    var diemDoiTuong = document.getElementById("doiTuong").value * 1;
    var tongDiemMon = tongDiem();
    var diemChuan = "";

    if (diemKhuVuc == 1) {
        if (diemDoiTuong == 1) {
            diemChuan = tongDiemMon + 2 + 2.5;
        } else if (diemDoiTuong == 2) {
            diemChuan = tongDiemMon + 2 + 1.5;
        } else if (diemDoiTuong == 3) {
            diemChuan = tongDiemMon + 2 + 1;
        } else {
            diemChuan = tongDiemMon + 2;
        };
    } else if (diemKhuVuc == 2) {
        if (diemDoiTuong == 1) {
            diemChuan = tongDiemMon + 1 + 2.5;
        } else if (diemDoiTuong == 2) {
            diemChuan = tongDiemMon + 1 + 1.5;
        } else if (diemDoiTuong == 3) {
            diemChuan = tongDiemMon + 1 + 1;
        } else {
            diemChuan = tongDiemMon + 1;
        };
    } else if (diemKhuVuc == 3) {
        if (diemDoiTuong == 1) {
            diemChuan = tongDiemMon + 0.5 + 2.5;
        } else if (diemDoiTuong == 2) {
            diemChuan = tongDiemMon + 0.5 + 1.5;
        } else if (diemDoiTuong == 3) {
            diemChuan = tongDiemMon + 0.5 + 1;
        } else {
            diemChuan = tongDiemMon + 0.5;
        };
    } else {
        if (diemDoiTuong == 1) {
            diemChuan = tongDiemMon + 2.5;
        } else if (diemDoiTuong == 2) {
            diemChuan = tongDiemMon + 1.5;
        } else if (diemDoiTuong == 3) {
            diemChuan = tongDiemMon + 1 + 1;
        } else {
            diemChuan = tongDiemMon;
        };
    };

    return diemChuan;
};

function soSanhDiem() {
    var dc = document.getElementById("diemChuan").value * 1;
    var nn = tinhDiem();
    var kq;
    if (nn >= dc) {
        kq = "Bạn đã đậu. "
    } else {
        kq = "Bạn đã rớt. "
    };

    return kq;
};

document.getElementById("ketQua").onclick = function () {
    var nn = tinhDiem()
    var mm = soSanhDiem();
    document.getElementById("show_1").innerHTML = mm + " Tổng điểm: " + nn;
}

/**
 * Bài 2
 */

function tinhTienDien() {
    var soDien = document.getElementById("soKW").value;
    var tong = "";

    if (soDien > 0 && soDien <= 50) {
        tong = soDien * 500;
    } else if (soDien > 50 && soDien <= 100) {
        tong = (soDien - 50) * 650 + 50 * 500;
    } else if (soDien > 100 && soDien <= 200) {
        tong = (soDien - 100) * 850 + 50 * 650 + 50 * 500;
    } else if (soDien > 200 && soDien <= 350) {
        tong = (soDien - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    } else {
        tong = (soDien - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    };

    return tong;
};

document.getElementById("tienDien").onclick = function () {
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var name = document.getElementById("hoTen").value;
    var tongTien = tinhTienDien();
    document.getElementById("show_2").innerHTML ="Họ tên: " + name + "; Tiền điện: " + currentFormat.format(tongTien);
}