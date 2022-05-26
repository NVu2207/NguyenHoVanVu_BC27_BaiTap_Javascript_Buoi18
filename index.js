var number = [];
function result() {
  var add = +document.getElementById("phtux").value;
  number.push(add);
  document.getElementById("result").style.display = "block";
  document.getElementById("ketQuaMang").innerHTML =
    "Mảng gồm có các số sau: " + number;
}

function KQ() {
  var chooseOption = document.getElementById("thisIsName").value;
  var thongBao;
  switch (chooseOption) {
    case "A":
      thongBao = "Tổng Số Dương Là: " + BT1();
      break;
    case "B":
      thongBao = "Số Lượng Số Dương Có Trong Mảng: " + BT2();
      break;
    case "C":
      thongBao = "Số Nhỏ Nhất : " + BT3();
      break;
    case "D":
      thongBao = "Số Dương Nhỏ Nhất : " + BT4();
      break;
    case "E":
      thongBao = "Số Chẵn Cuối Cùng : " + BT5();
      break;
    case "F":
      thongBao = "Mảng sau khi đổi chỗ là : " + BT6();
      break;
    case "G":
      thongBao = "Sắp xếp Mảng Tăng Dần : " + BT7();
      break;
    case "H":
      thongBao = "Số Nguyên Tố Đầu Tiên : " + BT8();
      break;
    case "I":
      thongBao = "Số Nguyên Có Trong Mảng : " + BT9();
      break;
    case "J":
      thongBao = BT10();
      break;

    default:
      thongBao = "Bạn Chưa Chọn Chức Năng";
      break;
  }
  document.getElementById("KQ").style.display = "block";
  document.getElementById("ketQua").innerHTML = thongBao;
}

//bài tập 1
function BT1() {
  var Tong = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      Tong += number[i];
    }
  }
  return Tong;
}

//bài tập 2
function BT2() {
  var Dem = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      Dem++;
    }
  }
  return Dem;
}

//bài tập 3

function BT3() {
  var min = number[0];
  for (var i = 1; i < number.length; i++) {
    if (min > number[i]) {
      min = number[i];
    }
  }
  return min;
}

//bài tập 4
function BT4() {
  var min;
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      min = number[i];
      break;
    }
  }
    
  for (var i = 0; i < number.length; i++) {
    if( number[i] > 0 && number[i] < min){
      min = number[i];
    } 
  }
  
  return min;
}

//bài tập 5
function BT5() {
  var SoChan = -1;
  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      SoChan = number[i];
    }
  }
  return SoChan;
}

//bài tập 6
function BT6() {
  var a = +document.getElementById("VT1").value;
  var b = +document.getElementById("VT2").value;
  var c;
  c = number[a];
  number[a] = number[b];
  number[b] = c;
  return number;
}
//bài tập 7
function compare(a, b) {
  return a - b;
}
function BT7() {
  number.sort(compare);
  return number;
}

//bài tập 8
function BT8() {
  var SoNguyenTo = -1;
  for (var i = 0; i < number.length; i++) {
    if (check(number[i]) == true) {
      SoNguyenTo = number[i];
      break;
    }
  }
  return SoNguyenTo;
}
function check(x) {
  if (x < 2) {
    return false;
  } else if (x > 2) {
    if (x % 2 == 0) {
      return false;
    }
    for (var i = 3; i <= Math.sqrt(x); i += 2) {
      if (x % i == 0) {
        return false;
      }
    }
  }
  return true;
}

//bài tập 9
function BT9() {
  var Dem = 0;
  for (var i = 0; i < numberBT9.length; i++) {
    if (Number.isInteger(numberBT9[i])) {
      Dem++;
    }
  }
  return Dem;
}
var numberBT9 = [];

function result1() {
  var add = +document.getElementById("baiTap9").value;
  numberBT9.push(add);
  document.getElementById("result1").style.display = "block";
  document.getElementById("ketQuaMang").innerHTML =
    "Mảng mới gồm có các số sau: " + numberBT9;
}

//bài tập 10
function BT10() {
  var ThongBao1;
  var SoDuong = 0;
  var SoAm = 0;
  for (var i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      SoDuong++;
    } else {
      SoAm++;
    }
  }
  if (SoDuong > SoAm) {
    ThongBao1 = "Số Dương nhiều hơn Số Âm ";
  } else if (SoAm > SoDuong) {
    ThongBao1 = "Số Âm nhiều hơn Số Dương";
  } else {
    ThongBao1 = "Số Dương bằng Số Âm";
  }
  return ThongBao1;
}
