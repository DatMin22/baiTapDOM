
// bài 1: tính trung bình
function calculator() {
    var s1 = +document.getElementById("s1").value;
    var s2 = +document.getElementById("s2").value;
    var s3 = +document.getElementById("s3").value;
    var s4 = +document.getElementById("s4").value;
    var s5 = +document.getElementById("s5").value;
    var tbc = (s1 + s2 + s3 + s4 + s5) / 5;
    // tbc.style.color
    var result = document.getElementById("result");
    result.innerHTML = tbc;
    // result.style.color="yellow";
    // result.style.fontSize="50px";
    console.log(result);
};


// bài 2: tính tiền lương
function calculatorSalary() {
    var salaryOneDay = 100000;
    var numOfDayWork = +document.getElementById("numOfDayWork").value;

    var salary = numOfDayWork * salaryOneDay;
    var result2 = document.getElementById("result2");
    result2.innerHTML = new Intl.NumberFormat('de-VN', { style: 'currency', currency: 'VND' }).format(salary);
};

//-----------------------------------------------
// bài 3: Quy đổi tiền
function convertMoney() {
    const ONE_USD = 23500;
    var USD = document.getElementById("usd").value;
    var moneyAfterConvert = USD * ONE_USD;
    var result3 = document.getElementById("result3");
    result3.innerHTML =new Intl.NumberFormat('de-VN', { style: 'currency', currency: 'VND' }).format(moneyAfterConvert) ;
};










//-----------------------------------------------
// Bài 4: Tính chu vi diện tích hình chữ nhật
function tinhChuViVaDienTich() {
    // Lấy giá trị chiều dài từ input có id "chieu-dai"
    var chieuDai = parseFloat(document.getElementById("chieuDai").value);

    // Lấy giá trị chiều rộng từ input có id "chieu-rong"
    var chieuRong = parseFloat(document.getElementById("chieuRong").value);

    // Tính chu vi: C = 2 * (chiều dài + chiều rộng)
    var chuVi = 2 * (chieuDai + chieuRong);

    // Tính diện tích: S = chiều dài * chiều rộng
    var dienTich = chieuDai * chieuRong;

    // Hiển thị kết quả lên các phần tử có id tương ứng
    document.getElementById("resultChuVi").innerHTML = "Chu vi: " + chuVi;
    document.getElementById("resultDienTich").innerHTML = "Diện tích: " + dienTich;
}






//-----------------------------------------------
// Bài 5: TÍnh tổng 2 ký số
function calculatorSum(){
    var num = document.getElementById("num").value,
    ten = Math.floor(num / 10),
    unit = num % 10,
    sum = ten + unit;

    document.getElementById("resultSum").innerHTML=sum;
}



