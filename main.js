/**
 * bài 1:
 * Đầu vào:
 * 2 biến lương một ngày và số ngày làm: dailySalary, numberOfDaysWorked
 * Xử lý:
 * biến tổng lương: totalSalary
 * totalSalary = dailySalary * numberOfDaysWorked
 * Đầu ra:
 * show totalSalary
 */

var calculateSalary = document.getElementById("calculateSalary");
calculateSalary.onclick = function () {
  const dailySalary = document.getElementById("dailySalary").value * 1;
  const numberOfDaysWorked =
    document.getElementById("numberOfDaysWorked").value * 1;

  var totalSalary;
  totalSalary = dailySalary * numberOfDaysWorked;
  var resultEx1 = document.getElementById("resultEx1");
  resultEx1.innerHTML = "Tổng lương là: " + totalSalary;
};

/**
 * bài 2:
 * Đầu vào:
 * 5 biến của 5 số thực: number1, number2, number3, number4, number5
 * Xử lý:
 * biến giá trị trung bình: averageValue
 * averageValue = (nunber1 + number2 + number3 + number4 + number5) / 5;
 * Đầu ra:
 * show averageValue
 */

var calculateAverage = document.getElementById("calculateAverage");
calculateAverage.onclick = function () {
  const number1 = document.getElementById("number1").value * 1;
  const number2 = document.getElementById("number2").value * 1;
  const number3 = document.getElementById("number3").value * 1;
  const number4 = document.getElementById("number4").value * 1;
  const number5 = document.getElementById("number5").value * 1;
  var averageValue = (number1 + number2 + number3 + number4 + number5) / 5;
  var resultEx2 = document.getElementById("resultEx2");
  resultEx2.innerHTML = "Giá trị trung bình là: " + averageValue;
};

/**
 * bài 3:
 * đầu vào:
 * biến số tiền USD: usdAmount
 * biến 1 usd có giá trị 23500: oneUSD
 * xử lý:
 * convertedAmount = oneUSD * usdAmount
 * đầu ra:
 * show convertedAmount
 */

var currencyConversion = document.getElementById("currencyConversion");
currencyConversion.onclick = function () {
  const oneUSD = 23500;
  const usdAmount = document.getElementById("usdAmount").value * 1;
  var convertedAmount = 0;
  convertedAmount = oneUSD * usdAmount;
  var money = convertedAmount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  var resultEx3 = document.getElementById("resultEx3");
  resultEx3.innerHTML = "số tiền sau quy đổi là: " + money;
};

/**
 * bài 4:
 * đầu vào:
 * biến chiều dài. chiều rộng: length, width
 * xử lý:
 * 2 biến chu vi, diện tích: rectanglePerimeter, rectangleArea
 * rectanglePerimeter = (length + width) *2
 * rectangleArea = length * width
 * đầu ra:
 * show rectanglePerimeter và rectangleArea
 */

var calculateEx4 = document.getElementById("calculateEx4");
calculateEx4.onclick = function () {
  const length = document.getElementById("length").value * 1;
  const width = document.getElementById("width").value * 1;
  var rectanglePerimeter = (length + width) * 2;
  var rectangleArea = length * width;
  var resultEx4 = document.getElementById("resultEx4");
  resultEx4.innerHTML =
    "chu vi là: " +
    rectanglePerimeter +
    "<br />" +
    "diện tích là: " +
    rectangleArea;
};

/**
 * bài 5:
 * đầu vào:
 * biến số có hai chữ số: twoDigitNumber
 * xử lý:
 * biến tổng hai ký số, ký số thứ nhất, ký số thứ hai: sumOfTwoDigits, firstDigit, secondDigit
 * firstDigit = math.floor(twoDigitNumber  / 10);
 * secondDigit = math.floor(twoDigitNumber % 10);
 * sumOfTwoDigits = firstDigit + secondDigit;
 * đầu ra:
 * show sumOfTwoDigits
 */

var calculateEx5 = document.getElementById("calculateEx5");
calculateEx5.onclick = function () {
  const twoDigitNumber = document.getElementById("twoDigitNumber").value * 1;
  var firstDigit = Math.floor(twoDigitNumber / 10);
  var secondDigit = Math.floor(twoDigitNumber % 10);
  var sumOfTwoDigits = firstDigit + secondDigit;
  var resultEx5 = document.getElementById("resultEx5");
  resultEx5.innerHTML = "tổng 2 ký số là: " + sumOfTwoDigits;
};
